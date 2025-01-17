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
    }

    @Test
    void contextLoads() {
    }

}
