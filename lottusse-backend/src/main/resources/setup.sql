-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS lottussedb;

-- Usar la base de datos
USE lottussedb;

-- Insertar productos de ejemplo
DROP TABLE IF EXISTS `t_product`;
CREATE TABLE `t_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Insertar datos en la tabla t_product
INSERT INTO t_product (name) VALUES
('2020 Apple MacBook Air Laptop: Apple M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage'),
('Acer Swift 3 Thin & Light Laptop | 14" Full HD IPS 100% sRGB Display | AMD Ryzen 7 5700U'),
('Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel Core i5- 16 GB Memory'),
('Dell XPS 13 9310 Touchscreen Laptop - 13.4" FHD+ - Intel Core i7 - 16GB RAM - 512GB SSD'),
('HP Spectre x360 14T Touchscreen Laptop - 13.5" 3K2K OLED - Intel Core i7 - 16GB RAM - 1TB SSD'),
('Lenovo ThinkPad X1 Carbon Gen 9 - 14" FHD - Intel Core i7 - 16GB RAM - 512GB SSD'),
('ASUS ZenBook 14 Ultra-Slim Laptop - 14" FHD - AMD Ryzen 5 4500U - 8GB RAM - 256GB SSD'),
('Razer Blade 15 Base Gaming Laptop - 15.6" FHD - Intel Core i7 - 16GB RAM - 512GB SSD'),
('Samsung Galaxy Book Pro - 15.6" AMOLED - Intel Core i5 - 8GB RAM - 512GB SSD'),
('Google Pixelbook Go - 13.3" FHD Touchscreen - Intel Core i5 - 8GB RAM - 128GB SSD');