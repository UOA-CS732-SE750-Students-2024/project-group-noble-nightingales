package uoa.nightingales.intellicueenginenode.controllers;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.intellicueenginenode.configs.QueueDeserializer;
import uoa.nightingales.intellicueenginenode.services.CreatorAdjustmentService;

import java.util.List;
import java.util.Queue;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/creators")
public class CreatorController {

    final CreatorAdjustmentService creatorAdjustmentService;


    /**
     * Adds a new creator to the queue. If the queue reaches its maximum size, the oldest entry is removed.
     *
     * @param creatorQueue The current state of the creator queue, passed in the request body.
     * @param creatorName The name of the creator to add to the queue.
     * @return ResponseEntity containing the updated queue.
     */
    @PostMapping("/add")
    public ResponseEntity<Queue<String>> addCreator(@RequestBody @JsonDeserialize(using = QueueDeserializer.class) Queue<String> creatorQueue,
                                                    @RequestParam String creatorName) {
        Queue<String> updatedQueue = creatorAdjustmentService.addCreator(creatorQueue, creatorName);
        return ResponseEntity.ok(updatedQueue);
    }


    /**
     * Removes a specified creator from the queue.
     *
     * @param creatorQueue The current state of the creator queue, passed in the request body.
     * @param creatorName The name of the creator to be removed from the queue.
     * @return ResponseEntity containing the updated queue.
     */
    @DeleteMapping("/remove")
    public ResponseEntity<Queue<String>> removeCreator(@RequestBody @JsonDeserialize(using = QueueDeserializer.class) Queue<String> creatorQueue,
                                                       @RequestParam List<String> creatorName) {
        Queue<String> updatedQueue = creatorAdjustmentService.removeCreator(creatorQueue, creatorName);
        return ResponseEntity.ok(updatedQueue);
    }


    /**
     * Retrieves a list of up to three random creators from the queue.
     * If the queue contains three or fewer creators, all are returned.
     *
     * @param creatorQueue The current state of the creator queue, passed in the request body.
     * @return ResponseEntity containing a list of random creators.
     */
    @GetMapping("/random")
    public ResponseEntity<List<String>> getRandomCreators(@RequestBody @JsonDeserialize(using = QueueDeserializer.class) Queue<String> creatorQueue) {
        List<String> randomCreators = creatorAdjustmentService.getRandomCreators(creatorQueue);
        return ResponseEntity.ok(randomCreators);
    }

}
