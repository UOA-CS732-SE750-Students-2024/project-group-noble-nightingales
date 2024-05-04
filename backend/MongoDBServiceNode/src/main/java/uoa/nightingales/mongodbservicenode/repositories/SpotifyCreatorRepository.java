package uoa.nightingales.mongodbservicenode.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import uoa.nightingales.mongodbservicenode.pojos.SpotifyCreatorData;

import java.util.Optional;

@Repository
public interface SpotifyCreatorRepository extends MongoRepository<SpotifyCreatorData, String> {

    Optional<SpotifyCreatorData> findByUserId(String userId);
}
