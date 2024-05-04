package uoa.nightingales.intellicueenginenode.services;

import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ThreadLocalRandom;

@Service("creatorAdjustmentService")
public class CreatorAdjustmentServiceImpl implements CreatorAdjustmentService{

    private static final int MAX_QUEUE_SIZE = 10;

    @Override
    public Queue<String> addCreator(Queue<String> creatorQueue, String creatorName) {
        if (creatorQueue.size() >= MAX_QUEUE_SIZE) {
            creatorQueue.poll();
        }
        creatorQueue.offer(creatorName);
        return creatorQueue;
    }

    @Override
    public Queue<String> removeCreator(Queue<String> creatorQueue, List<String> creatorNames) {
        for (String s : creatorNames){
            creatorQueue.remove(s);
        }
        return creatorQueue;
    }

    @Override
    public List<String> getRandomCreators(Queue<String> creatorQueue) {
        List<String> randomCreators = new LinkedList<>();
        String[] creatorsArray = creatorQueue.toArray(new String[0]);
        int queueSize = creatorQueue.size();

        if (queueSize <= 3) {
            randomCreators.addAll(creatorQueue);
        } else {
            while (randomCreators.size() < 3) {
                int randomIndex = ThreadLocalRandom.current().nextInt(queueSize);
                String creator = creatorsArray[randomIndex];
                if (!randomCreators.contains(creator)) {
                    randomCreators.add(creator);
                }
            }
        }

        return randomCreators;
    }

}
