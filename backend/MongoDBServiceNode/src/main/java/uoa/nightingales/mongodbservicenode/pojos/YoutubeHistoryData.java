package uoa.nightingales.mongodbservicenode.pojos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@Document(collection = "youtube_history_data")
public class YoutubeHistoryData {

    @Id
    @NotBlank(message = "User ID cannot be blank")
    @NotNull(message = "User ID cannot be blank")
    private String userId;
    private List<GenreData> genreDataList;
    private Map<String, Integer> indexGenreMap;
    private List<ChannelData> channelDataList;
    private Map<String, Integer> indexChannelMap;

    public static YoutubeHistoryData initializeData(String userId) {
        YoutubeHistoryData data = new YoutubeHistoryData();
        data.setUserId(userId);
        data.setChannelDataList(new ArrayList<>());
        data.setIndexGenreMap(new HashMap<>());
        data.setIndexChannelMap(new HashMap<>());
        data.setGenreDataList(new ArrayList<>());
        return data;
    }
}
