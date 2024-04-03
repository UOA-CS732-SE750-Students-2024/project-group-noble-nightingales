package uoa.nightingales.mysqldatabaseservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
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
}
