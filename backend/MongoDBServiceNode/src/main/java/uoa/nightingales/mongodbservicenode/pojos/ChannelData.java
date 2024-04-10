package uoa.nightingales.mongodbservicenode.pojos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChannelData {

    private String channelId;
    private Integer significance;
}
