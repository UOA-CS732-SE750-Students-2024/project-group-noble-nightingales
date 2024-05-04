package uoa.nightingales.intellicueenginenode.configs;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;
import java.util.LinkedList;
import java.util.Queue;

public class QueueDeserializer extends JsonDeserializer<Queue<String>> {

    @Override
    public Queue<String> deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        Queue<String> queue = new LinkedList<>();
        if (node.isArray()) {
            for (JsonNode element : node) {
                queue.add(element.asText());
            }
        }
        return queue;
    }
}
