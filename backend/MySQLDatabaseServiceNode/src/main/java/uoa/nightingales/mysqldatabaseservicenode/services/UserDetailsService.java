package uoa.nightingales.mysqldatabaseservicenode.services;

import uoa.nightingales.mysqldatabaseservicenode.pojos.UserDetails;

import java.util.Optional;

/**
 * Service interface for managing user details.
 * This interface defines operations for inserting, finding, updating, and deleting user details.
 * It is intended to interact with the UserDetailsMapper for database operations and utilizes caching for optimized read operations.
 */
public interface UserDetailsService {

    /**
     * Inserts new user details into the database and caches the newly inserted details.
     * This method is transactional and ensures the integrity of the user details insertion process.
     *
     * @param userDetails The UserDetails object containing the information to be inserted.
     */
    void insertUserDetails(UserDetails userDetails);

    /**
     * Retrieves the details of a user by their unique user ID.
     * This method is read-only and transactional, optimizing for performance with caching.
     * If the details are found in the cache, they are returned directly; otherwise, the database is queried, and the result is cached.
     *
     * @param userID The unique identifier of the user whose details are to be retrieved.
     * @return An Optional containing the UserDetails if found, or an empty Optional if no details exist for the given user ID.
     */
    Optional<UserDetails> findUserDetailsByUserId(Integer userID);

    /**
     * Updates the details of an existing user in the database and updates the corresponding cache entry to ensure consistency.
     * This method is transactional and guarantees the atomicity of the update operation.
     *
     * @param userDetails The UserDetails object containing the updated information for the user.
     * @return The number of rows affected by the update operation, typically 1 if the update is successful.
     */
    int updateUserDetails(UserDetails userDetails);

    /**
     * Deletes the details of a user by their unique user ID, both from the database and the cache, to maintain data consistency.
     * This method is transactional and ensures that the delete operation is atomic.
     *
     * @param userID The unique identifier of the user whose details are to be deleted.
     * @return The number of rows affected by the delete operation, typically 1 if the deletion is successful.
     */
    int deleteUserDetailsByUserId(Integer userID);
}
