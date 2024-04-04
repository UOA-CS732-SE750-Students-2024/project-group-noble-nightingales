package uoa.nightingales.youtubeservicenode.configs;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.security.GeneralSecurityException;

@Configuration
public class BeanConfiguration {

    @Bean
    public YouTube youtube() throws GeneralSecurityException, IOException {
        return new YouTube.Builder(GoogleNetHttpTransport.newTrustedTransport(), JacksonFactory.getDefaultInstance(), null)
                .setApplicationName("uoa-media-youtube-node")
                .build();
    }
}
