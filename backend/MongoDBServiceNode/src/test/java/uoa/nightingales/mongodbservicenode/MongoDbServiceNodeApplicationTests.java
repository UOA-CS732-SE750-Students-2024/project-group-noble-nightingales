package uoa.nightingales.mongodbservicenode;

import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.mongodbservicenode.exceptions.DuplicateException;
import uoa.nightingales.mongodbservicenode.pojos.ChannelData;
import uoa.nightingales.mongodbservicenode.pojos.User;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeCommentData;
import uoa.nightingales.mongodbservicenode.pojos.YoutubeHistoryData;
import uoa.nightingales.mongodbservicenode.repositories.UserRepository;
import uoa.nightingales.mongodbservicenode.services.UserService;
import uoa.nightingales.mongodbservicenode.services.YoutubeCommentDataService;
import uoa.nightingales.mongodbservicenode.services.YoutubeHistoryDataService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest
@RequiredArgsConstructor
class MongoDbServiceNodeApplicationTests {

    @Resource
    private YoutubeHistoryDataService youtubeHistoryDataService;

    @Resource
    private UserRepository userRepository;

    @Resource
    private YoutubeCommentDataService youtubeCommentDataService;

    @Resource
    private UserService userService;

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
    public void testUserCollection() throws DuplicateException {
        userRepository.deleteAll();
        User user = new User();
        user.setUsername("James777G");
        user.setEmail("jamesgong0719@gmail.com");
        user.setPassword("ghx020719");
        user.setDateOfBirth("2002/07/19");
        userService.saveData(user);
    }

    @Test
    public void testReadFromUserCollection() {
        System.out.println(userRepository.findByEmail("jamesgong0719@gmail.com"));
        System.out.println(userRepository.findByUsername("James777G"));
    }

    @Test
    public void testYoutubeSearchService(){
        List<YoutubeCommentData> commentsByVideoId = youtubeCommentDataService.getCommentsByVideoId("test-only");
        System.out.println(commentsByVideoId);
    }

    @Test
    public void testLogin(){
        System.out.println(userService.isUserInDatabase("James777G", "ghx020719"));
        System.out.println(userService.isUserInDatabase("James777G", "ghx020719a"));
    }

    @Test
    public void testUserService(){
        System.out.println(userService.getUserByEmail("jamesgong0719@gmail.com"));
        User user = new User();
        user.setUsername("James777G");
        user.setEmail("jamesgong0719@gmail.com");
        user.setPassword("ghx020719");
        user.setDateOfBirth("2002/07/19");
        try{
            userService.saveData(user);
            fail();
        } catch (DuplicateException e) {
            System.out.println("passed");
        }

    }

}
