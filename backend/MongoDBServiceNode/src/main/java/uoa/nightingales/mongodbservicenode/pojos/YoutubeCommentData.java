package uoa.nightingales.mongodbservicenode.pojos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "youtube_comment_data")
public class YoutubeCommentData {

    @Id
    private String id;

    @NotBlank(message = "Video ID cannot be blank")
    @NotNull(message = "Video ID cannot be null")
    private String videoId;

    @NotBlank(message = "User ID cannot be blank")
    @NotNull(message = "User ID cannot be null")
    private String userId;

    @NotEmpty(message = "Comments cannot be empty")
    @NotNull(message = "Comments cannot be null")
    private List<@NotBlank(message = "Comment cannot be blank") String> comments;
}
