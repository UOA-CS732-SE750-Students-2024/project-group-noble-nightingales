package uoa.nightingales.mysqldatabaseservicenode.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import uoa.nightingales.mysqldatabaseservicenode.mappers.UserDetailsMapper;
import uoa.nightingales.mysqldatabaseservicenode.pojos.UserDetails;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@Service("userDetailsService")
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService{


    final UserDetailsMapper userDetailsMapper;
    final CacheManager cacheManager;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public void insertUserDetails(UserDetails userDetails) {
        userDetailsMapper.insertUserDetails(userDetails);
        log.info("setting up cache for user_details with key: " + userDetails.getUserID() + " and value: " + userDetails);
        Objects.requireNonNull(cacheManager.getCache("user_details")).put(userDetails.getUserID(), userDetails);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    @Cacheable(value = "user_details", key = "#userID")
    public Optional<UserDetails> findUserDetailsByUserId(Integer userID) {
        Optional<UserDetails> userDetailsByUserId = userDetailsMapper.findUserDetailsByUserId(userID);
        log.info("setting up cache for user_details with key: " + userID +
                " and value: " + (userDetailsByUserId.isPresent() ? userDetailsByUserId.get() : "null"));
        return userDetailsByUserId;

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public int updateUserDetails(UserDetails userDetails) {
        Objects.requireNonNull(cacheManager.getCache("user_details")).put(userDetails.getUserID(), userDetails);
        log.info("setting up cache for user_details with key: " + userDetails.getUserID() + " and value: " + userDetails);
        return userDetailsMapper.updateUserDetails(userDetails);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    @CacheEvict(value = "user_details", key = "#userID")
    public int deleteUserDetailsByUserId(Integer userID) {
        log.info("removing stale cache for user_details with key: " + userID);
        return userDetailsMapper.deleteUserDetailsByUserId(userID);
    }
}
