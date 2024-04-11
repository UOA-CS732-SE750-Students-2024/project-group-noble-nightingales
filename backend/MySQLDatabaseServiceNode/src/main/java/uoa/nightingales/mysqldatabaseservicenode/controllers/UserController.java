package uoa.nightingales.mysqldatabaseservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.mysqldatabaseservicenode.domains.VerifyRequest;
import uoa.nightingales.mysqldatabaseservicenode.pojos.User;
import uoa.nightingales.mysqldatabaseservicenode.services.UserService;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    /**
     * Retrieves a user by their unique identifier.
     *
     * @param id The unique identifier of the user to retrieve.
     * @return A {@link ResponseEntity} containing the user if found, or a not found status.
     */
    @GetMapping("/{id}")
    public ResponseEntity<User> selectUserById(@PathVariable Integer id) {
        log.info("Request to find user with id: " + id);
        User user = userService.selectUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Inserts a new user into the system.
     * <p>The user's password will be encoded before insertion to ensure data security.</p>
     *
     * @param user The user to insert, represented as a {@link User} object.
     * @return A {@link ResponseEntity} with a status of CREATED if the insertion is successful, or INTERNAL_SERVER_ERROR if an exception occurs.
     */
    @PostMapping
    public ResponseEntity<Void> insertUser(@Validated @RequestBody User user) {
        log.info("Request to insert user: " + user.getUsername());
        try {
            userService.insertUser(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            log.error("Error inserting user: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Finds a user by their username.
     * <p>This method returns the user details for a given username. The search is case-sensitive.</p>
     *
     * @param username The username of the user to find.
     * @return A {@link ResponseEntity} containing the user if found, or a not found status.
     */
    @GetMapping("/find")
    public ResponseEntity<User> findByUsername(@RequestParam String username) {
        log.info("Request to find user by username: " + username);
        Optional<User> user = userService.findByUsername(username);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    /**
     * Handles a POST request to verify a user's credentials and retrieve their unique user ID.
     * This method logs the attempt and delegates to the userService to find the user's ID based on the provided username and password.
     * <p>
     * The method expects two request parameters: {@code username} and {@code password}. If the user is found and the credentials are valid,
     * the user's ID is returned in the response body. If no user matches the provided credentials, a 404 Not Found status is returned.
     *
     * @return A {@link ResponseEntity} containing the user's ID if found and valid; otherwise, a notFound (404) response.
     */
    @PostMapping("/verify")
    public ResponseEntity<Integer> getIdOfUser(@Validated @RequestBody VerifyRequest request) {
        log.info("Request to find user by username: " + request.getUsername() + " and password: " + request.getPassword());
        Integer userId = userService.getIdOfUser(request.getUsername(), request.getPassword());
        return userId == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(userId);
    }
}
