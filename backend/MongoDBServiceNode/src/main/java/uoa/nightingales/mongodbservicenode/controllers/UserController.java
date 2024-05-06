package uoa.nightingales.mongodbservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.mongodbservicenode.exceptions.DuplicateException;
import uoa.nightingales.mongodbservicenode.pojos.SpotifyCreatorData;
import uoa.nightingales.mongodbservicenode.pojos.User;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeHistoryData;
import uoa.nightingales.mongodbservicenode.services.SpotifyCreatorService;
import uoa.nightingales.mongodbservicenode.services.UserService;
import uoa.nightingales.mongodbservicenode.services.YoutubeHistoryDataService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    final UserService userService;
    final YoutubeHistoryDataService youtubeHistoryDataService;
    final SpotifyCreatorService spotifyCreatorService;

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@Validated @RequestBody User user) {
        try {
            User savedUser = userService.saveData(user);
            YoutubeHistoryData youtubeData = YoutubeHistoryData.initializeData(user.getId());
            youtubeHistoryDataService.saveData(youtubeData);
            SpotifyCreatorData spotifyData = SpotifyCreatorData.initializeData(user.getId());
            spotifyCreatorService.saveCreatorList(spotifyData);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (DuplicateException e) {
            log.error("Error creating user: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    /**
     * Checks if a user exists in the database with the provided username and password.
     *
     * @param loginDetails A map containing "username" and "password" keys.
     * @return ResponseEntity with true if user exists and password matches, otherwise false.
     */
    @PostMapping("/check-user")
    public ResponseEntity<String> isUserInDatabase(@RequestBody Map<String, String> loginDetails) {
        String username = loginDetails.get("username");
        String password = loginDetails.get("password");

        boolean userExists = userService.isUserInDatabase(username, password);
        if(userExists){
            User user = userService.getUserByUsername(username);
            return ResponseEntity.ok(user.getId());
        }else{
            return ResponseEntity.notFound().build();
        }


    }

    @PutMapping("/update/{email}")
    public ResponseEntity<?> updateUser(@PathVariable String email, @RequestParam String password) {
        User updatedUser = userService.updateUser(email, password);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with email: " + email);
        }
    }

    @GetMapping("/by-username")
    public ResponseEntity<User> getUserByUsername(@RequestParam String username) {
        User user = userService.getUserByUsername(username);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        User user = userService.getUserByEmail(email);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }
}
