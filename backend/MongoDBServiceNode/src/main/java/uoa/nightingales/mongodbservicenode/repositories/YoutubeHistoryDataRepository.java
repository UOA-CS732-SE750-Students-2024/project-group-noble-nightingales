package uoa.nightingales.mongodbservicenode.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeHistoryData;

@Repository
public interface YoutubeHistoryDataRepository extends MongoRepository<YoutubeHistoryData, String> {
}
