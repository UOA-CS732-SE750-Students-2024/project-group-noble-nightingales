package uoa.nightingales.mongodbservicenode.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import uoa.nightingales.mongodbservicenode.exceptions.DuplicateException;
import uoa.nightingales.mongodbservicenode.pojos.User;
import uoa.nightingales.mongodbservicenode.repositories.UserRepository;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service("userService")
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final CacheManager cacheManager;
    private final EncodingService encodingService;

    private static final String COLLECTION_NAME = "user_data";

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = {DuplicateException.class})
    public User saveData(User user) throws DuplicateException {
        if (getUserByEmail(user.getEmail()) != null || getUserByUsername(user.getUsername()) != null){
            log.info("User already exists");
            throw new DuplicateException("user already exists!");
        }
        user.setPassword(encodingService.encode(user.getPassword()));
        log.info("Saving user: " + user + " in collection: " + COLLECTION_NAME);
        log.info("Setting up cache for " + COLLECTION_NAME + " with ID: " + user.getId() + " and user: " + user);
        User save = userRepository.save(user);
        Objects.requireNonNull(cacheManager.getCache(COLLECTION_NAME)).put(user.getUsername(), user);
        return save;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public User updateUser(String email, String password) {
        User userStored = getUserByEmail(email);
        if (userStored == null){
            log.info("user does not exist");
            return null;
        }
        userStored.setPassword(password);
        log.info("setting up cache for " + COLLECTION_NAME + " with username: " + userStored.getUsername());
        User save = userRepository.save(userStored);
        Objects.requireNonNull(cacheManager.getCache(COLLECTION_NAME)).put(userStored.getUsername(), userStored);
        return save;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public boolean isUserInDatabase(String username, String password) {
        User user = getUserByUsername(username);
        if(user == null) {
            return false;
        }
        return encodingService.match(password, user.getPassword());
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public User getUserById(String userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.orElse(null);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public User getUserByUsername(String username) {
        log.info("Looking for user with username: " + username + " in collection: " + COLLECTION_NAME);
        User user = userRepository.findByUsername(username);
        if (user != null) {
            log.info("Setting up cache for " + COLLECTION_NAME + " with username: " + username);
            Objects.requireNonNull(cacheManager.getCache(COLLECTION_NAME)).put(username, user);
        }
        return user;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public User getUserByEmail(String email) {
        log.info("Looking for user with email: " + email + " in collection: " + COLLECTION_NAME);
        User user = userRepository.findByEmail(email);
        if (user != null) {
            log.info("Setting up cache for " + COLLECTION_NAME + " with email: " + email);
            Objects.requireNonNull(cacheManager.getCache(COLLECTION_NAME)).put(email, user);
        }
        return user;
    }
}
