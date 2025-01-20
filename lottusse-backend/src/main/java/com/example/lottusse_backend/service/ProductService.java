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

    private static final String REDIS_KEY_PREFIX = "Producto:";
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
     * @throws IllegalArgumentException Si el nombre del producto esta vacio o ya existe.
     */
    public Product addProduct(Product product) {
        if (product.getName() == null || product.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre del producto no puede estar vacío...");
        }

        if (productRepository.findByName(product.getName()).isPresent()) {
            throw new IllegalArgumentException("El nombre del producto ya existe...");
        }

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
            logger.info("Obteniendo producto con ID: {}", id);

            // Consulta en Redis
            String redisKey = REDIS_KEY_PREFIX + id;
            logger.info("Comprobando Redis en busca de la clave: {}", redisKey);
            Product cachedProduct = (Product) redisTemplate.opsForValue().get(redisKey);

            if (cachedProduct != null) {
                logger.info("Producto encontrado en Redis con ID: {}", id);
                return Optional.of(cachedProduct);
            }

            // Si no está en Redis, busca en la base de datos
            logger.info("Producto no encontrado en Redis, verificando la base de datos para ID: {}", id);
            Optional<Product> product = productRepository.findById(id);
            if (product.isPresent()) {
                logger.info("Producto encontrado en base de datos con ID: {}", id);
                // Inserta el producto en Redis
                redisTemplate.opsForValue().set(redisKey, product.get(), 10, TimeUnit.MINUTES);
            } else {
                logger.warn("Producto no encontrado en base de datos con ID: {}", id);
            }

            return product;
        } catch (Exception e) {
            logger.error("Error al obtener el producto con ID: {}", id, e);
            throw new RuntimeException("Error al obtener el producto por ID: " + id, e);
        }
    }

    /**
     * Elimina un producto por su ID
     *
     * @param id El ID del producto a eliminar.
     * @return `true` si el producto fue eliminado, `false` si no se encuentró.
     */
    public boolean deleteProduct(Integer id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            productRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
