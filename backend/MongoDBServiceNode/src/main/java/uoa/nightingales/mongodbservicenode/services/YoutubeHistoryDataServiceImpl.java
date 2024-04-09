package uoa.nightingales.mongodbservicenode.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeHistoryData;
import uoa.nightingales.mongodbservicenode.repositories.YoutubeHistoryDataRepository;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service("youtubeHistoryDataService")
public class YoutubeHistoryDataServiceImpl implements YoutubeHistoryDataService{


    final YoutubeHistoryDataRepository youtubeHistoryDataRepository;

    final CacheManager cacheManager;

    private static final String COLLECTION_NAME = "youtube_history_data";

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public YoutubeHistoryData saveData(YoutubeHistoryData data) {
        log.info("saving of data: " + data + " in collection: " + COLLECTION_NAME);
        Objects.requireNonNull(cacheManager.getCache(COLLECTION_NAME)).put(data.getUserId(), data);
        log.info("setting up cache for " + COLLECTION_NAME + " with id: " + data.getUserId() + " and data: " + data);
        return youtubeHistoryDataRepository.save(data);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    @Cacheable(value = "youtube_history_data", key = "#id")
    public Optional<YoutubeHistoryData> findById(String id) {
        log.info("looking for records with id: " + id + " in collection: " + COLLECTION_NAME);
        Optional<YoutubeHistoryData> data = youtubeHistoryDataRepository.findById(id);
        log.info("setting up cache for " + COLLECTION_NAME + " with id: " + id + " and data: " + data);
        return data;
    }
}
