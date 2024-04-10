package uoa.nightingales.intellicueenginenode.utils;

import uoa.nightingales.intellicueenginenode.pojos.ChannelData;
import uoa.nightingales.intellicueenginenode.pojos.GenreData;

import java.util.List;
import java.util.Map;

public class AlgorithmsUtil {

    public static void efficientSwap(List<GenreData> genreDataList, Map<String, Integer> indexMap, String genreToChange, int valueChanged) {
        Integer index = indexMap.get(genreToChange);
        if (index == null || valueChanged == 0) {
            return;
        }
        GenreData genreDataToBeChanged = genreDataList.get(index);

        // Update the significance
        genreDataToBeChanged.setSignificance(genreDataToBeChanged.getSignificance() + valueChanged);

        if(genreDataToBeChanged.getSignificance() <= 0) {
            genreDataList.remove((int) index);
            updateIndexMap(genreDataList, indexMap, index, genreDataList.size());
            return;
        }

        int newIndex = index;
        if (valueChanged > 0) {
            for (int i = index - 1; i >= 0; i--) {
                if (genreDataToBeChanged.getSignificance() > genreDataList.get(i).getSignificance()) {
                    newIndex = i;
                } else {
                    break;
                }
            }

            if (newIndex != index) {

                genreDataList.remove((int) index);
                genreDataList.add(newIndex, genreDataToBeChanged);
                updateIndexMap(genreDataList, indexMap, newIndex, index);
            }
        } else {
            for (int i = index + 1; i < genreDataList.size(); i++) {
                if (genreDataToBeChanged.getSignificance() < genreDataList.get(i).getSignificance()) {
                    newIndex = i;
                } else {
                    break;
                }
            }

            if (newIndex != index) {
                genreDataList.remove((int) index);
                genreDataList.add(newIndex, genreDataToBeChanged);
                updateIndexMap(genreDataList, indexMap, index, newIndex);
            }
        }
    }

    public static void efficientSwapForChannel(List<ChannelData> channelDataList, Map<String, Integer> indexMap, String channelToChange, int valueChanged) {
        Integer index = indexMap.get(channelToChange);
        if (index == null || valueChanged == 0) {
            return;
        }
        ChannelData genreDataToBeChanged = channelDataList.get(index);

        genreDataToBeChanged.setSignificance(genreDataToBeChanged.getSignificance() + valueChanged);

        if(genreDataToBeChanged.getSignificance() <= 0) {
            channelDataList.remove((int) index);
            updateIndexMapForChannel(channelDataList, indexMap, index, channelDataList.size());
            return;
        }

        int newIndex = index;
        if (valueChanged > 0) {
            for (int i = index - 1; i >= 0; i--) {
                if (genreDataToBeChanged.getSignificance() > channelDataList.get(i).getSignificance()) {
                    newIndex = i;
                } else {
                    break;
                }
            }

            if (newIndex != index) {
                channelDataList.remove((int) index);
                channelDataList.add(newIndex, genreDataToBeChanged);
                updateIndexMapForChannel(channelDataList, indexMap, newIndex, index);
            }
        } else {
            for (int i = index + 1; i < channelDataList.size(); i++) {
                if (genreDataToBeChanged.getSignificance() < channelDataList.get(i).getSignificance()) {
                    newIndex = i;
                } else {
                    break;
                }
            }

            if (newIndex != index) {
                channelDataList.remove((int) index);
                channelDataList.add(newIndex, genreDataToBeChanged);
                updateIndexMapForChannel(channelDataList, indexMap, index, newIndex);
            }
        }
    }


    private static void updateIndexMap(List<GenreData> genreDataList, Map<String, Integer> indexMap, int startIndex, int endIndex) {
        // Ensure startIndex is always less than endIndex for correct loop execution
        int start = Math.min(startIndex, endIndex);
        int end = Math.max(startIndex, endIndex);

        for (int i = start; i <= end; i++) {
            GenreData genreData = genreDataList.get(i);
            indexMap.put(genreData.getName(), i);
        }
    }

    private static void updateIndexMapForChannel (List<ChannelData> genreDataList, Map<String, Integer> indexMap, int startIndex, int endIndex) {
        // Ensure startIndex is always less than endIndex for correct loop execution
        int start = Math.min(startIndex, endIndex);
        int end = Math.max(startIndex, endIndex);

        for (int i = start; i <= end; i++) {
            ChannelData genreData = genreDataList.get(i);
            indexMap.put(genreData.getChannelId(), i);
        }
    }
}
