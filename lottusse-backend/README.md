# Lottusse Backend

Este proyecto es el backend para la aplicación Lottusse. Proporciona una API RESTful para gestionar las operaciones de la aplicación, incluyendo la gestión de productos. Permite agregar productos, revisar si hay productos existentes en Redis o en la Base de Datos y devolver todos los productos o por su ID en formato JSON.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- Java 17
- Maven
- MySQL
- Redis

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Melendref14/pruebas-tecnicas-lottusse.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd lottusse-backend
    ```

3. Crea la base de datos y las tablas necesarias:

    Ejecuta el script `setup.sql` en tu servidor MySQL para crear la base de datos y las tablas, y para insertar productos de ejemplo:

    ```bash
    mysql -u tu-usuario -p < resources/setup.sql
    ```

4. Crea un archivo `.env` basado en el archivo `.env.example` y configura las variables de entorno necesarias.

5. Instala las dependencias del proyecto:

    ```bash
    ./mvnw clean install
    ```

6. Inicia la aplicación:

    ```bash
    ./mvnw spring-boot:run
    ```

La aplicación estará disponible en `http://localhost:8080`.