package uoa.nightingales.spotifyservicenode.configs;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
public class CacheConfig {

    @Value("${cache.primary}")
    private String primaryCache;

    @Value("${cache.secondary}")
    private String secondaryCache;
    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager(primaryCache, secondaryCache);
        cacheManager.registerCustomCache("primary_cache", Caffeine.newBuilder()
                .expireAfterAccess(1800, TimeUnit.SECONDS)
                .initialCapacity(100)
                .maximumSize(500)
                .build());
        cacheManager.registerCustomCache("secondary_cache", Caffeine.newBuilder()
                .expireAfterAccess(1, TimeUnit.DAYS)
                .initialCapacity(50)
                .maximumSize(100)
                .build());
        return cacheManager;
    }

}
