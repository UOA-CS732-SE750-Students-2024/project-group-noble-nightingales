package uoa.nightingales.mysqldatabaseservicenode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class MySqlDatabaseServiceNodeApplication {

    public static void main(String[] args) {
        SpringApplication.run(MySqlDatabaseServiceNodeApplication.class, args);
    }

}
