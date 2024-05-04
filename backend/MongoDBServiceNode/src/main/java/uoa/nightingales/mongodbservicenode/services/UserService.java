package uoa.nightingales.mongodbservicenode.services;

import uoa.nightingales.mongodbservicenode.exceptions.DuplicateException;
import uoa.nightingales.mongodbservicenode.pojos.User;

public interface UserService {

    User saveData(User user) throws DuplicateException;

    User getUserByUsername(String username);

    User getUserByEmail(String email);

    User updateUser(String email, String password);
}
