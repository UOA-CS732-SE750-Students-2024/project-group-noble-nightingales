package uoa.nightingales.mongodbservicenode.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import uoa.nightingales.mongodbservicenode.pojos.SpotifyCreatorData;
import uoa.nightingales.mongodbservicenode.repositories.SpotifyCreatorRepository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service("spotifyCreatorService")
public class SpotifyCreatorServiceImpl implements SpotifyCreatorService{

    final SpotifyCreatorRepository spotifyCreatorRepository;

    final CacheManager cacheManager;

    private static final String COLLECTION_NAME = "spotify_creator_data";

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    @Cacheable(value = "spotify_creator_data", key = "#userId")
    public List<String> getCreatorListByUserId(String userId) {
        log.info("Fetching creator list for user ID: " + userId);
        Optional<SpotifyCreatorData> data = spotifyCreatorRepository.findByUserId(userId);
        return data.map(SpotifyCreatorData::getCreatorList).orElse(null);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void saveCreatorList(SpotifyCreatorData data) {
        log.info("Saving Spotify creator data: " + data);
        Objects.requireNonNull(cacheManager.getCache(COLLECTION_NAME)).put(data.getUserId(), data);
        log.info("Setting up cache for " + COLLECTION_NAME + " with user ID: " + data.getUserId());
        spotifyCreatorRepository.save(data);
    }
}
