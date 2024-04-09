package uoa.nightingales.mongodbservicenode.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeCommentData;
import uoa.nightingales.mongodbservicenode.repositories.YoutubeCommentDataRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service("youtubeCommentDataService")
public class YoutubeCommentDataServiceImpl implements YoutubeCommentDataService{

    final YoutubeCommentDataRepository youtubeCommentDataRepository;

    private final static String COLLECTION_NAME = "youtube_comment_data";

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public YoutubeCommentData saveData(YoutubeCommentData data) {
        log.info("saving data: " + data + " to collection: " + COLLECTION_NAME);
        return youtubeCommentDataRepository.save(data);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    @Cacheable(value = "youtube_comment_data", key = "#videoId")
    public List<YoutubeCommentData> getCommentsByVideoId(String videoId) {
        log.info("searching data with video id: " + videoId + " in collection: " + COLLECTION_NAME);
        List<YoutubeCommentData> data = youtubeCommentDataRepository.findCommentsByVideoId(videoId);
        log.info("setting up cache for " + COLLECTION_NAME + " with id: " + videoId + " and data: " + data);
        return data;
    }
}
