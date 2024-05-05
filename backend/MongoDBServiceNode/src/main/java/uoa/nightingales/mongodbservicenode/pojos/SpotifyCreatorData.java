package uoa.nightingales.mongodbservicenode.pojos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document(collection = "creator_data")
public class SpotifyCreatorData {

    @Id
    private String userId;

    private List<String> creatorList;

    public static SpotifyCreatorData initializeData(String userId){
        SpotifyCreatorData data = new SpotifyCreatorData();
        data.setUserId(userId);
        data.setCreatorList(new ArrayList<>());
        return data;
    }
}
