package uoa.nightingales.mongodbservicenode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class MongoDbServiceNodeApplication {

    public static void main(String[] args) {
        SpringApplication.run(MongoDbServiceNodeApplication.class, args);
    }

}
