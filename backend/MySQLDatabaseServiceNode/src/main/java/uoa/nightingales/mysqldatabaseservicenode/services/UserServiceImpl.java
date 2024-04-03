package uoa.nightingales.mysqldatabaseservicenode.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import uoa.nightingales.mysqldatabaseservicenode.mappers.UserMapper;
import uoa.nightingales.mysqldatabaseservicenode.pojos.User;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@Service("userService")
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{


    final UserMapper userMapper;
    final EncodingService encodingService;
    final CacheManager cacheManager;

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    @Cacheable(value = "users", key = "#id")
    public User selectUserById(Integer id) {
        User user = userMapper.selectUserById(id);
        log.info("setting up cache for users with key: " + id + " and value: " + user);
        return user;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertUser(User user) {
        String rawPassword = user.getPassword();
        String encodedPassword = encodingService.encode(rawPassword);
        user.setPassword(encodedPassword);
        userMapper.insertUser(user);
        log.info("setting up cache for users with key: " + user.getUserID() + " and value: " + user);
        Objects.requireNonNull(cacheManager.getCache("users_credentials")).put(user.getUserID(), user);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public Optional<User> findByUsername(String username) {
        return userMapper.findByUsername(username);
    }
}
