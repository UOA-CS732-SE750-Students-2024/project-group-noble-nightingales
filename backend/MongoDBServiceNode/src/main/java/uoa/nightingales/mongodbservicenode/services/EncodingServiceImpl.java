package uoa.nightingales.mongodbservicenode.services;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

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
