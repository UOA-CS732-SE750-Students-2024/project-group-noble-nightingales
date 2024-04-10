package uoa.nightingales.aiservicenode.controller;

import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uoa.nightingales.aiservicenode.services.ChatGptYoutubeRecommendService;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/gpt/youtube")
public class ChatGptYoutubeController {
    @Resource
   final ChatGptYoutubeRecommendService chatGptYoutubeRecommendService;


    @GetMapping("/relevant")
    public ResponseEntity<List<String>> getRelevantCategories(@RequestParam String userInput) {
        List<String> categories = chatGptYoutubeRecommendService.getUserInputRelevantCategory(userInput);
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/not-relevant")
    public ResponseEntity<List<String>> getNotRelevantCategories(@RequestParam String userInput) {
        List<String> categories = chatGptYoutubeRecommendService.getUserInputNotRelevantCategory(userInput);
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/youtube")
    public ResponseEntity<List<String>> getYoutubeCategories(@RequestParam String youtubeDesc) {
        List<String> categories = chatGptYoutubeRecommendService.getYoutubeRelevantCategory(youtubeDesc);
        return ResponseEntity.ok(categories);
    }
}
