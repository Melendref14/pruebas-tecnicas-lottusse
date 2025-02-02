package com.example.lottusse_backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LottuseBackendApplication {

    public static void main(String[] args) {
        loadEnvFile(".env");
        loadEnvFile(".env.production");

        SpringApplication.run(LottuseBackendApplication.class, args);
    }

    private static void loadEnvFile(String filename) {
        Dotenv dotenv = Dotenv.configure().filename(filename).load();
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
    }
}