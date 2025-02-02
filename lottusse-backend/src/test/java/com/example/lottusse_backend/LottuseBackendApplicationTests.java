package com.example.lottusse_backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class LottuseBackendApplicationTests {

    @BeforeAll
    static void setup() {
        Dotenv dotenv = Dotenv.load();
        System.setProperty("ALLOWED_ORIGIN", dotenv.get("ALLOWED_ORIGIN"));
        System.setProperty("DB_URL", dotenv.get("DB_URL"));
        System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
        System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
        System.setProperty("DB_DRIVER", dotenv.get("DB_DRIVER"));
        System.setProperty("REDIS_HOST", dotenv.get("REDIS_HOST"));
        System.setProperty("REDIS_PORT", dotenv.get("REDIS_PORT"));
    }

    @Test
    void contextLoads() {
    }

}
