package com.example.lottusse_backend.controller;

import com.example.lottusse_backend.entity.Product;
import com.example.lottusse_backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador REST para gestionar productos.
 */
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    /**
     * Endpoint para agregar un nuevo producto.
     * 
     * @param product El producto a agregar.
     * @return El producto guardado.
     */
    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product savedProduct = productService.addProduct(product);
        return ResponseEntity.ok(savedProduct);
    }

    /**
     * Endpoint para obtener todos los productos.
     * 
     * @return Una lista de todos los productos.
     */
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }
    
    /**
     * Endpoint para obtener un producto por su ID.
     *
     * @param id El ID del producto a obtener.
     * @return El producto encontrado o un estado 404 si no se encuentra.
      */
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable String id) {
        try {
            Integer productId = Integer.parseInt(id);
            Optional<Product> product = productService.getProductById(productId);
            return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid product ID format");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal server error");
        }
    }
}