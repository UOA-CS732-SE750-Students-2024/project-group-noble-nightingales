package uoa.nightingales.spotifyservicenode.caches;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Slf4j
@RequiredArgsConstructor
@Component("primaryCache")
public class PrimaryAccessTokenCache {

    final CacheManager cacheManager;

    @Value("${cache.primary}")
    private String primaryCache;


    public void saveEntry(String key, String value) {
        log.info("saving cache with key: " + key + " and value: " + value + "into primary cache.");
        Objects.requireNonNull(cacheManager.getCache(primaryCache)).put(key, value);
    }

    public String retrieveCache(String key) {
        log.info("retrieving cache with key: " + key + " from primary cache");
        return Objects.requireNonNull(cacheManager.getCache(primaryCache)).get(key, String.class);
    }

}
