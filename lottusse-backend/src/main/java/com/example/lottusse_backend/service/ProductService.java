package com.example.lottusse_backend.service;

import com.example.lottusse_backend.entity.Product;
import com.example.lottusse_backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Servicio para gestionar productos
 */
@Service
public class ProductService {

    private static final String REDIS_KEY_PREFIX = "product:";
    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    /**
     * Agrega un nuevo producto
     * 
     * @param product El producto a agregar.
     * @return El producto guardado.
     */
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    /**
     * Obtiene todos los productos
     * 
     * @return Una lista de todos los productos.
     */
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    /**
     * Obtiene un producto por su ID
     * 
     * @param id El ID del producto a obtener.
     * @return El producto encontrado o un estado 404 si no se encuentra.
     */
    public Optional<Product> getProductById(Integer id) {
        try {
            logger.info("Fetching product with ID: {}", id);

            // Consulta en Redis
            String redisKey = REDIS_KEY_PREFIX + id;
            logger.info("Checking Redis for key: {}", redisKey);
            Product cachedProduct = (Product) redisTemplate.opsForValue().get(redisKey);

            if (cachedProduct != null) {
                logger.info("Product found in Redis with ID: {}", id);
                return Optional.of(cachedProduct);
            }

            // Si no está en Redis, busca en la base de datos
            logger.info("Product not found in Redis, checking database for ID: {}", id);
            Optional<Product> product = productRepository.findById(id);
            if (product.isPresent()) {
                logger.info("Product found in database with ID: {}", id);
                // Inserta el producto en Redis
                redisTemplate.opsForValue().set(redisKey, product.get(), 10, TimeUnit.MINUTES);
            } else {
                logger.warn("Product not found in database with ID: {}", id);
            }

            return product;
        } catch (Exception e) {
            logger.error("Error fetching product with ID: {}", id, e);
            throw new RuntimeException("Error al obtener el producto por ID: " + id, e);
        }
    }
}
