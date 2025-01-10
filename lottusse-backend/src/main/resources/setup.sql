-- Crear la base de datos
CREATE DATABASE lottusse_db;

-- Usar la base de datos
USE lottusse_db;

-- Crear la tabla de productos
CREATE TABLE t_product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    description TEXT
);

-- Insertar productos de ejemplo
INSERT INTO t_product (name, brand, description) VALUES
('2020 Apple MacBook Air Laptop: Apple M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage', 'Apple', 'Lightweight and powerful laptop with Apple M1 chip.'),
('Acer Swift 3 Thin & Light Laptop | 14" Full HD IPS 100% sRGB Display | AMD Ryzen 7 5700U', 'Acer', 'Thin and light laptop with AMD Ryzen 7 processor.'),
('Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel Core i5- 16 GB Memory', 'Microsoft', 'Versatile laptop with touchscreen and Intel Core i5 processor.'),
('Dell XPS 13 9310 Touchscreen Laptop - 13.4" FHD+ - Intel Core i7 - 16GB RAM - 512GB SSD', 'Dell', 'High-performance laptop with Intel Core i7 processor.'),
('HP Spectre x360 14T Touchscreen Laptop - 13.5" 3K2K OLED - Intel Core i7 - 16GB RAM - 1TB SSD', 'HP', 'Premium laptop with OLED display and Intel Core i7 processor.'),
('Lenovo ThinkPad X1 Carbon Gen 9 - 14" FHD - Intel Core i7 - 16GB RAM - 512GB SSD', 'Lenovo', 'Durable and powerful laptop with Intel Core i7 processor.'),
('ASUS ZenBook 14 Ultra-Slim Laptop - 14" FHD - AMD Ryzen 5 4500U - 8GB RAM - 256GB SSD', 'ASUS', 'Ultra-slim laptop with AMD Ryzen 5 processor.'),
('Razer Blade 15 Base Gaming Laptop - 15.6" FHD - Intel Core i7 - 16GB RAM - 512GB SSD', 'Razer', 'High-performance gaming laptop with Intel Core i7 processor.'),
('Samsung Galaxy Book Pro - 15.6" AMOLED - Intel Core i5 - 8GB RAM - 512GB SSD', 'Samsung', 'Lightweight laptop with AMOLED display and Intel Core i5 processor.'),
('Google Pixelbook Go - 13.3" FHD Touchscreen - Intel Core i5 - 8GB RAM - 128GB SSD', 'Google', 'Portable and powerful laptop with Intel Core i5 processor.');