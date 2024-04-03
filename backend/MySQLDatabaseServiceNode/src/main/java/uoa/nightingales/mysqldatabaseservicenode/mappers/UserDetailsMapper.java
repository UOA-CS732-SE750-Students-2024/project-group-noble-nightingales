package uoa.nightingales.mysqldatabaseservicenode.mappers;


import org.apache.ibatis.annotations.*;
import uoa.nightingales.mysqldatabaseservicenode.pojos.UserDetails;

import java.util.Optional;

/**
 * This interface handles the data insertion, retrieval, and removal of data for the UserDetails table
 */
@Mapper
public interface UserDetailsMapper {


    /**
     * Inserts user details into the database.
     * Assumes the user ID already exists in the Users table and is linked via a foreign key.
     *
     * @param userDetails The UserDetails object containing the user's additional information to be inserted.
     */
    @Insert("INSERT INTO UserDetails(userID, gender, email, age) VALUES(#{userID}, #{gender}, #{email}, #{age})")
    void insertUserDetails(UserDetails userDetails);

    /**
     * Retrieves detailed information about a user by their user ID.
     *
     * @param userID The unique ID of the user whose details are to be retrieved.
     * @return An Optional containing the UserDetails object if details for the specified user ID exist, or an empty Optional if not.
     */
    @Select("SELECT * FROM UserDetails WHERE userID = #{userID}")
    Optional<UserDetails> findUserDetailsByUserId(Integer userID);


    /**
     * Updates user details in the database for a given user ID.
     * This method assumes that user details for the given userID already exist.
     *
     * @param userDetails The UserDetails object containing the updated information for the user.
     * @return The number of rows affected by the update operation.
     */
    @Update("UPDATE UserDetails SET gender = #{gender}, email = #{email}, age = #{age} WHERE userID = #{userID}")
    int updateUserDetails(UserDetails userDetails);


    /**
     * Deletes the user details associated with a given user ID.
     *
     * @param userID The unique ID of the user whose details are to be deleted.
     * @return The number of rows affected by the delete operation.
     */
    @Delete("DELETE FROM UserDetails WHERE userID = #{userID}")
    int deleteUserDetailsByUserId(Integer userID);

}
