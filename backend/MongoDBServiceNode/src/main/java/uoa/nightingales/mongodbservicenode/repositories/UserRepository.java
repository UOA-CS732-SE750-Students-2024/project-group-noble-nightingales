package uoa.nightingales.mongodbservicenode.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import uoa.nightingales.mongodbservicenode.pojos.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByUsername(String username);

    User findByEmail(String email);
}
