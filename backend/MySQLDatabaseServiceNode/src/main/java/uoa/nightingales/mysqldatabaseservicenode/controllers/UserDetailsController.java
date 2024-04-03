package uoa.nightingales.mysqldatabaseservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import uoa.nightingales.mysqldatabaseservicenode.pojos.UserDetails;
import uoa.nightingales.mysqldatabaseservicenode.services.UserDetailsService;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/user-details")
@RequiredArgsConstructor
public class UserDetailsController {

    final UserDetailsService userDetailsService;

    /**
     * Creates new user details.
     *
     * @api {post} /api/user-details Create User Details
     * @apiName CreateUserDetails
     * @apiGroup UserDetails
     * @apiVersion 1.0.0
     * @apiDescription Creates new user details in the system. Returns BAD_REQUEST if database constraints are violated (e.g., duplicate entries).
     *
     * @apiParam (RequestBody) {UserDetails} userDetails The user details to create.
     *
     * @apiSuccess (Success 201) The user details were successfully created.
     * @apiError (Error 400) BadRequest Database constraints violated.
     */
    @PostMapping
    public ResponseEntity<Void> insertUserDetails(@Validated @RequestBody UserDetails userDetails) {
        try {
            log.info("request to insert " + userDetails);
            userDetailsService.insertUserDetails(userDetails);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (DataIntegrityViolationException e) {
            log.warn("database constraints violated");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Database constraints violated, cannot create user details.");
        }
    }

    /**
     * Retrieves user details by user ID.
     *
     * @api {get} /api/user-details/:userID Get User Details
     * @apiName GetUserDetails
     * @apiGroup UserDetails
     * @apiVersion 1.0.0
     * @apiDescription Retrieves the details of a user by their unique user ID.
     *
     * @apiParam {Integer} userID The unique identifier of the user whose details are being retrieved.
     *
     * @apiSuccess (Success 200) {UserDetails} userDetails The requested user details.
     * @apiError (Error 404) NotFound No user details were found with the provided userID.
     */
    @GetMapping("/{userID}")
    public ResponseEntity<UserDetails> findUserDetailsByUserId(@PathVariable Integer userID) {
        log.info("request to find user details with user id: " + userID);
        Optional<UserDetails> userDetails = userDetailsService.findUserDetailsByUserId(userID);
        return userDetails.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Updates existing user details.
     *
     * @api {put} /api/user-details Update User Details
     * @apiName UpdateUserDetails
     * @apiGroup UserDetails
     * @apiVersion 1.0.0
     * @apiDescription Updates the details of an existing user.
     *
     * @apiParam (RequestBody) {UserDetails} userDetails The updated user details.
     *
     * @apiSuccess (Success 200) The user details were successfully updated.
     * @apiError (Error 404) NotFound The user details could not be found and therefore not updated.
     */
    @PutMapping
    public ResponseEntity<Void> updateUserDetails(@Validated @RequestBody UserDetails userDetails) {
        log.info("request to update user details with new user details: " + userDetails);
        int updatedRows = userDetailsService.updateUserDetails(userDetails);
        if (updatedRows > 0) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Deletes user details by user ID.
     *
     * @api {delete} /api/user-details/:userID Delete User Details
     * @apiName DeleteUserDetails
     * @apiGroup UserDetails
     * @apiVersion 1.0.0
     * @apiDescription Deletes the details of a user by their unique user ID.
     *
     * @apiParam {Integer} userID The unique identifier of the user whose details are to be deleted.
     *
     * @apiSuccess (Success 200) The user details were successfully deleted.
     * @apiError (Error 404) NotFound The user details could not be found and therefore not deleted.
     */
    @DeleteMapping("/{userID}")
    public ResponseEntity<Void> deleteUserDetailsByUserId(@PathVariable Integer userID) {
        log.info("request to delete user details with id: " + userID);
        int deletedRows = userDetailsService.deleteUserDetailsByUserId(userID);
        if (deletedRows > 0) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
