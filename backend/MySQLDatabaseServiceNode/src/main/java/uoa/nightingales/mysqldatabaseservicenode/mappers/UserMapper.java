package uoa.nightingales.mysqldatabaseservicenode.mappers;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import uoa.nightingales.mysqldatabaseservicenode.pojos.User;

import java.util.Optional;

/**
 * This interface handles the data insertion, retrieval, and removal of data for the Users table
 */
@Mapper
public interface UserMapper {

    /**
     * Retrieves a user by their unique ID.
     *
     * @param id The unique ID of the user to retrieve.
     * @return The User object corresponding to the specified ID if found, otherwise null.
     */
    @Select("SELECT * FROM Users WHERE userID = #{id}")
    User selectUserById(Integer id);

    /**
     * Inserts a new user record into the database. Automatically generates and assigns a unique ID to the user.
     * DataIntegrityViolationException will be thrown if constraints, such as unique username, are violated.
     *
     * @param user The User object containing the information to be inserted into the database.
     */
    @Insert("INSERT INTO Users(username, password) VALUES(#{username}, #{password})")
    @Options(useGeneratedKeys = true, keyProperty = "userID")
    void insertUser(User user);

    /**
     * Finds a user by their username.
     *
     * @param username The username of the user to be retrieved.
     * @return An Optional containing the User object if a user with the specified username exists, or an empty Optional if not.
     */
    @Select("SELECT * FROM Users WHERE username = #{username}")
    Optional<User> findByUsername(String username);
}
