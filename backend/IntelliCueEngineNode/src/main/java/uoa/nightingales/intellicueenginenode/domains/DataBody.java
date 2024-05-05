package uoa.nightingales.intellicueenginenode.domains;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import uoa.nightingales.intellicueenginenode.configs.QueueDeserializer;

import java.util.List;
import java.util.Queue;

@Data
public class DataBody {

    @JsonDeserialize(using = QueueDeserializer.class)
    private Queue<String> creatorList;

    private List<String> unwantedCreators;
}
