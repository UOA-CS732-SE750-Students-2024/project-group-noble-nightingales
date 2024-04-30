package uoa.nightingales.mysqldatabaseservicenode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class MySqlDatabaseServiceNodeApplication {

    public static void main(String[] args) {
        SpringApplication.run(MySqlDatabaseServiceNodeApplication.class, args);
    }

}
