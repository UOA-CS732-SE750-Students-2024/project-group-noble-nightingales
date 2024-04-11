package uoa.nightingales.mailservicenode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class MailServiceNodeApplication {

    public static void main(String[] args) {
        SpringApplication.run(MailServiceNodeApplication.class, args);
    }

}
