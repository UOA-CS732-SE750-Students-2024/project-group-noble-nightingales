package uoa.nightingales.intellicueenginenode.services;


import java.util.List;
import java.util.Queue;

public interface CreatorAdjustmentService {

    Queue<String> addCreator(Queue<String> creatorQueue, String creatorName);

    Queue<String> removeCreator(Queue<String> creatorQueue, List<String> creatorNames);

    List<String> getRandomCreators(Queue<String> creatorQueue);


}
