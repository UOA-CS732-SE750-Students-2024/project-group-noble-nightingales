package uoa.nightingales.mongodbservicenode;

import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.mongodbservicenode.pojos.ChannelData;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeCommentData;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeHistoryData;
import uoa.nightingales.mongodbservicenode.services.YoutubeCommentDataService;
import uoa.nightingales.mongodbservicenode.services.YoutubeHistoryDataService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest
@RequiredArgsConstructor
class MongoDbServiceNodeApplicationTests {

    @Resource
    private YoutubeHistoryDataService youtubeHistoryDataService;

    @Resource
    private YoutubeCommentDataService youtubeCommentDataService;

    @Test
    void contextLoads() {
    }

    @Test
    public void testYoutubeDataService(){

        YoutubeHistoryData data = new YoutubeHistoryData();
        ChannelData channelData = new ChannelData("12sd1fsa", 10);
        List<ChannelData> list = new ArrayList<>();
        list.add(channelData);
        Map<String, Integer> genreMap = new HashMap<>();
        genreMap.put("test", 1);

        data.setUserId("test_only");
        data.setChannelDataList(list);
        data.setIndexGenreMap(genreMap);
        data.setIndexGenreMap(genreMap);

        YoutubeHistoryData data1 = youtubeHistoryDataService.saveData(data);
        System.out.println(data1);
    }

    @Test
    public void testYoutubeCommentService(){
        YoutubeCommentData data = new YoutubeCommentData();
        List<String> comments = new ArrayList<>();
        comments.add("nihao");
        comments.add("hello");
        data.setComments(comments);

        data.setUserId("test-only");

        data.setVideoId("test-only");
        YoutubeCommentData data1 = youtubeCommentDataService.saveData(data);
        System.out.println(data1);
    }

    @Test
    public void testYoutubeSearchService(){
        List<YoutubeCommentData> commentsByVideoId = youtubeCommentDataService.getCommentsByVideoId("test-only");
        System.out.println(commentsByVideoId);
    }

}
