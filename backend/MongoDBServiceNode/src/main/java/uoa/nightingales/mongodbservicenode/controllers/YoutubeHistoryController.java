package uoa.nightingales.mongodbservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeHistoryData;
import uoa.nightingales.mongodbservicenode.services.YoutubeHistoryDataService;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/youtube")
@RequiredArgsConstructor
public class YoutubeHistoryController {

    final YoutubeHistoryDataService youtubeHistoryDataService;

    @PostMapping("/history")
    public ResponseEntity<YoutubeHistoryData> saveData(@Validated @RequestBody YoutubeHistoryData data) {
        log.info("Saving YoutubeHistoryData: {}", data);
        YoutubeHistoryData savedData = youtubeHistoryDataService.saveData(data);
        return ResponseEntity.ok(savedData);
    }

    @GetMapping("/history")
    public ResponseEntity<YoutubeHistoryData> findById(@RequestParam String id) {
        log.info("Fetching YoutubeHistoryData with id: {}", id);
        Optional<YoutubeHistoryData> data = youtubeHistoryDataService.findById(id);
        return data.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.ok(null));
    }

}
