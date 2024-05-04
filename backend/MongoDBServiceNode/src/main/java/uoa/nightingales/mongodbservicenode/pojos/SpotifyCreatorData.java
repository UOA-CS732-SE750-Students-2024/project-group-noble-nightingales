package uoa.nightingales.mongodbservicenode.pojos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "creator_data")
public class SpotifyCreatorData {

    @Id
    private String userId;

    private List<String> creatorList;
}
