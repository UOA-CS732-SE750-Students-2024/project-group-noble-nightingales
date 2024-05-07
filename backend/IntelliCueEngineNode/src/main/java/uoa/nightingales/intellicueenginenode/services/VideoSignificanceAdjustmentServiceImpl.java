package uoa.nightingales.intellicueenginenode.services;

import org.springframework.stereotype.Service;
import uoa.nightingales.intellicueenginenode.pojos.ChannelData;
import uoa.nightingales.intellicueenginenode.pojos.GenreData;
import uoa.nightingales.intellicueenginenode.utils.AlgorithmsUtil;

import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Service("videoSignificanceAdjustmentService")
public class VideoSignificanceAdjustmentServiceImpl implements VideoSignificanceAdjustmentService {

    @Override
    public List<GenreData> adjustGenreSignificance(Map<String, Integer> indexMap, List<GenreData> genreDataList, List<String> relatedGenres, boolean isWanted) {

        if (isWanted) {
            relatedGenres.forEach(s -> {
                if(!indexMap.containsKey(s)){
                    genreDataList.add(new GenreData(s, 1));
                    indexMap.put(s, genreDataList.size() - 1);
                }
            });
            return increaseSignificance(indexMap, genreDataList, relatedGenres);
        } else {
            return decreaseSignificance(indexMap, genreDataList, relatedGenres);
        }
    }

    @Override
    public List<ChannelData> adjustChannelSignificance(Map<String, Integer> indexMap, List<ChannelData> channelDataList, List<String> relatedChannels) {
        relatedChannels.forEach(s -> {
            if(!indexMap.containsKey(s)){
                channelDataList.add(new ChannelData(s, 1));
                indexMap.put(s, channelDataList.size() - 1);
            }
        });
        relatedChannels.forEach(s -> AlgorithmsUtil.efficientSwapForChannel(channelDataList, indexMap, s, 1));
        return channelDataList;
    }

    private List<GenreData> increaseSignificance(Map<String, Integer> indexMap, List<GenreData> genreDataList, List<String> relatedGenres) {

        relatedGenres.forEach(s -> AlgorithmsUtil.efficientSwap(genreDataList, indexMap, s, 1));
        return genreDataList;
    }

    private List<GenreData> decreaseSignificance(Map<String, Integer> indexMap, List<GenreData> genreDataList, List<String> relatedGenres) {
        relatedGenres.forEach(s -> AlgorithmsUtil.efficientSwap(genreDataList, indexMap, s, -9999));
        return genreDataList;
    }


}
