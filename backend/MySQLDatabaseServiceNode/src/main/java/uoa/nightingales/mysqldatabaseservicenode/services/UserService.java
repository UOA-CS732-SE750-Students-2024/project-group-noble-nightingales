package uoa.nightingales.mysqldatabaseservicenode.services;

import uoa.nightingales.mysqldatabaseservicenode.pojos.User;

import java.util.Optional;

/**
 * Service interface for user operations.
 * This interface defines the contract for user-related operations such as querying, inserting, and finding users by username.
 * Implementations are expected to handle transactions and caching appropriately.
 */
public interface UserService {

    /**
     * Retrieves a user by their unique identifier.
     * This method is transactional and read-only, making it suitable for high-read environments.
     * It employs caching to improve performance by reducing database load for frequently accessed user data.
     *
     * @param id the unique identifier of the user to retrieve.
     * @return the User object associated with the specified ID if found, null otherwise.
     */
    User selectUserById(Integer id);

    /**
     * Inserts a new user record into the database.
     * This method handles the encoding of the user's password for security reasons before inserting the user record.
     * It is transactional and ensures the integrity of the user insertion process.
     * Additionally, it caches the inserted user's credentials.
     *
     * @param user the User object containing the information to be inserted. The password within the user object should be in raw form and will be encoded within the method.
     */
    void insertUser(User user);

    /**
     * Finds a user by their username.
     * This method is read-only and transactional, optimizing for performance in read-heavy use cases.
     * It does not employ caching, relying on direct database access to retrieve user information.
     *
     * @param username the username of the user to find.
     * @return an Optional containing the User object if a user with the specified username exists, or an empty Optional if not.
     */
    Optional<User> findByUsername(String username);
}
