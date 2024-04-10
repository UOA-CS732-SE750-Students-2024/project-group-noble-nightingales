package uoa.nightingales.mongodbservicenode.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeCommentData;

import java.util.List;

@Repository
public interface YoutubeCommentDataRepository extends MongoRepository<YoutubeCommentData, String> {

    @Query("{ 'videoId' : ?0 }")
    List<YoutubeCommentData> findCommentsByVideoId(String videoId);

}
