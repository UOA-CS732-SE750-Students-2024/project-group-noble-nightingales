package uoa.nightingales.mongodbservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeCommentData;
import uoa.nightingales.mongodbservicenode.services.UserService;
import uoa.nightingales.mongodbservicenode.services.YoutubeCommentDataService;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/youtube")
@RequiredArgsConstructor
public class YoutubeCommentController {

    final YoutubeCommentDataService youtubeCommentDataService;
    final UserService userService;


    /**
     * Endpoint to save or update a YouTube comment.
     * <p>
     * The request body should contain a YouTubeCommentData object. If the object has an ID that matches an existing
     * comment, the comment will be updated. Otherwise, a new comment will be saved.
     *
     * @param data the YouTubeCommentData object to save or update
     * @return the saved or updated YouTubeCommentData object
     */
    @PostMapping("/comments")
    public ResponseEntity<YoutubeCommentData> saveComment(@Validated @RequestBody YoutubeCommentData data) {
        log.info("receiving data: " + data + " from comments data saving request");
        data.setUsername(userService.getUserById(data.getUserId()).getUsername());
        YoutubeCommentData savedData = youtubeCommentDataService.saveData(data);
        return ResponseEntity.ok(savedData);
    }

    /**
     * Endpoint to retrieve all comments associated with a specific video ID.
     * <p>
     * The video ID should be passed as a request parameter. The method returns a list of comments for the video.
     * If no comments are found, an empty list is returned.
     *
     * @param videoId the unique identifier of the video
     * @return a list of YouTubeCommentData objects associated with the video ID
     */
    @GetMapping("/comments")
    public ResponseEntity<List<YoutubeCommentData>> getCommentsByVideoId(@RequestParam String videoId) {
        log.info("receiving request to find all comments for video id: " + videoId);
        List<YoutubeCommentData> comments = youtubeCommentDataService.getCommentsByVideoId(videoId);
        return ResponseEntity.ok(comments);
    }

}
