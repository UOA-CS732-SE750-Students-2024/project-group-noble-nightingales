package uoa.nightingales.mysqldatabaseservicenode.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Slf4j
@Service("encodingService")
public class EncodingServiceImpl implements EncodingService{


    @Override
    public String encode(String rawData) {
        return BCrypt.hashpw(rawData, BCrypt.gensalt());
    }

    @Override
    public boolean match(String rawData, String encodedData) {
        return BCrypt.checkpw(rawData, encodedData);
    }
}
