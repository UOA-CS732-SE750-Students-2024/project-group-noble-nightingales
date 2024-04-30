package uoa.nightingales.spotifyservicenode.caches;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Slf4j
@RequiredArgsConstructor
@Component("secondaryCache")
public class SecondaryRefreshTokenCache {

    final CacheManager cacheManager;

    @Value("${cache.secondary}")
    private String secondaryCache;


    public void saveEntry(String key, String value) {
        log.info("saving cache with key: " + key + " and value: " + value + "into secondary cache.");
        Objects.requireNonNull(cacheManager.getCache(secondaryCache)).put(key, value);
    }

    public String retrieveCache(String key) {
        log.info("retrieving cache with key: " + key + " from secondary cache");
        return Objects.requireNonNull(cacheManager.getCache(secondaryCache)).get(key, String.class);
    }

}
