package uoa.nightingales.mailservicenode.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Objects;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service("verificationCodeManagementService")
public class VerificationCodeManagementServiceImpl implements VerificationCodeManagementService{

    private static final String CACHE_NAME = "verification_code_cache";

    final CacheManager cacheManager;

    @Override
    public String generateVerificationCode(String userEmail) {
        SecureRandom random = new SecureRandom();
        int randomNumber = random.nextInt(1_000_000);
        log.info("generating random verification code: " + randomNumber + " for email: " + userEmail);
        Objects.requireNonNull(cacheManager.getCache(CACHE_NAME)).put(userEmail, randomNumber);
        String formattedNumber = String.format("%06d", randomNumber);

        return formattedNumber.chars()
                .mapToObj(c -> String.valueOf((char) c))
                .collect(Collectors.joining(" "));
    }

    @Override
    public boolean verifyCode(String userEmail, Integer code) {
        Integer storedCode = Objects.requireNonNull(cacheManager.getCache(CACHE_NAME)).get(userEmail, Integer.class);
        if(Objects.equals(storedCode, code)){
            log.info("the verification code from user email: " + userEmail + " successfully verified");
            Objects.requireNonNull(cacheManager.getCache(CACHE_NAME)).evictIfPresent(userEmail);
            return true;
        }
        return false;
    }
}
