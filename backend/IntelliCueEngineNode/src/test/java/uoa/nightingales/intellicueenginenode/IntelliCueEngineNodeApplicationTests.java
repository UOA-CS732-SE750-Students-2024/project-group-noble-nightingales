package uoa.nightingales.intellicueenginenode;

import jakarta.annotation.Resource;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.intellicueenginenode.pojos.GenreData;
import uoa.nightingales.intellicueenginenode.services.VideoSignificanceAdjustmentService;
import uoa.nightingales.intellicueenginenode.utils.AlgorithmsUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest
class IntelliCueEngineNodeApplicationTests {

    @Resource
    private VideoSignificanceAdjustmentService videoSignificanceAdjustmentService;

    @Test
    void contextLoads() {
    }

    @Test
    void testAlgo1() {
        List<GenreData> genreDataList = new ArrayList<>();
        genreDataList.add(new GenreData("Rock", 5));
        genreDataList.add(new GenreData("Pop", 3));
        genreDataList.add(new GenreData("Jazz", 2));

        Map<String, Integer> indexMap = new HashMap<>();
        indexMap.put("Rock", 0);
        indexMap.put("Pop", 1);
        indexMap.put("Jazz", 2);

        // The genre to be changed and the value change
        String genreToChange = "Jazz";
        int valueChanged = 2;

        // Call the method under test
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, genreToChange, valueChanged);

        // Assert the expected outcomes
        Assertions.assertEquals(3, genreDataList.size(), "Genre list size should remain unchanged.");

        // Verify the new order and significances
        Assertions.assertEquals("Rock", genreDataList.get(0).getName(), "Rock should now be first.");
        Assertions.assertEquals(Integer.valueOf(5), genreDataList.get(0).getSignificance(), "Rock's significance should remain 5.");

        Assertions.assertEquals("Jazz", genreDataList.get(1).getName(), "Jazz should move up to second.");
        Assertions.assertEquals(Integer.valueOf(4), genreDataList.get(1).getSignificance(), "Jazz's significance should increase to 4.");

        Assertions.assertEquals("Pop", genreDataList.get(2).getName(), "Pop should now be third.");
        Assertions.assertEquals(Integer.valueOf(3), genreDataList.get(2).getSignificance(), "Pop's significance should remain 3.");

        // Verify the indexMap is updated correctly
        Assertions.assertEquals(Integer.valueOf(0), indexMap.get("Rock"), "Index map should be updated for Rock.");
        Assertions.assertEquals(Integer.valueOf(1), indexMap.get("Jazz"), "Index map should be updated for Jazz.");
        Assertions.assertEquals(Integer.valueOf(2), indexMap.get("Pop"), "Index map should be updated for Pop.");
    }

    @Test
    void testMixedSignificanceChanges() {
        // Setup initial large genre list and index map
        List<GenreData> genreDataList = new ArrayList<>();
        genreDataList.add(new GenreData("Rock", 10));
        genreDataList.add(new GenreData("Jazz", 9));
        genreDataList.add(new GenreData("Pop", 8));
        genreDataList.add(new GenreData("Classical", 7));
        genreDataList.add(new GenreData("Electronic", 6));
        genreDataList.add(new GenreData("Hip-Hop", 5));
        genreDataList.add(new GenreData("Country", 4));
        genreDataList.add(new GenreData("Reggae", 3));
        genreDataList.add(new GenreData("Blues", 2));
        genreDataList.add(new GenreData("Metal", 1));

        Map<String, Integer> indexMap = new HashMap<>();
        for (int i = 0; i < genreDataList.size(); i++) {
            indexMap.put(genreDataList.get(i).getName(), i);
        }

        // Apply changes
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Electronic", 5);
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Rock", -4);
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Blues", 3);
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Jazz", -2);

        // Assertions
        // Assert the list size remains unchanged
        Assertions.assertEquals(10, genreDataList.size(), "Genre list size should remain unchanged.");

        // Example assertion: Check if "Electronic" moved up correctly
        GenreData electronicGenre = genreDataList.stream()
                .filter(g -> "Electronic".equals(g.getName()))
                .findFirst()
                .orElse(null);
        Assertions.assertNotNull(electronicGenre, "Electronic genre should exist.");
        Assertions.assertEquals(11, (int) electronicGenre.getSignificance(), "Electronic's new significance should be 11.");
        Assertions.assertTrue(indexMap.get("Electronic") < indexMap.get("Rock"), "Electronic should be above Rock.");

    }

    @Test
    void testMixedSignificanceChanges2() {
        // Setup initial large genre list and index map
        List<GenreData> genreDataList = new ArrayList<>();
        genreDataList.add(new GenreData("Rock", 10));
        genreDataList.add(new GenreData("Jazz", 9));
        genreDataList.add(new GenreData("Pop", 8));
        genreDataList.add(new GenreData("Classical", 7));
        genreDataList.add(new GenreData("Electronic", 6));
        genreDataList.add(new GenreData("Hip-Hop", 5));
        genreDataList.add(new GenreData("Country", 4));
        genreDataList.add(new GenreData("Reggae", 3));
        genreDataList.add(new GenreData("Blues", 2));
        genreDataList.add(new GenreData("Metal", 1));

        Map<String, Integer> indexMap = new HashMap<>();
        for (int i = 0; i < genreDataList.size(); i++) {
            indexMap.put(genreDataList.get(i).getName(), i);
        }

        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Electronic", 5); // New significance: 11
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Rock", -4); // New significance: 6
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Blues", 3); // New significance: 5
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Jazz", -2); // New significance: 7

        // Apply additional changes
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Country", 7); // New significance: 11 (ties with Electronic but added later so it comes after)
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Pop", -5); // New significance: 3
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Reggae", 4); // New significance: 7
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Classical", -1); // New significance: 6

        // Expected final order and significance after all changes
        List<String> expectedOrder = List.of("Electronic", "Country", "Jazz", "Reggae", "Classical", "Rock", "Hip-Hop", "Blues", "Pop", "Metal");
        List<Integer> expectedSignificance = List.of(11, 11, 7, 7, 6, 6, 5, 5, 3, 1);

        // Assertions for the entire list order and significance
        for (int i = 0; i < expectedOrder.size(); i++) {
            GenreData genre = genreDataList.get(i);
            String expectedName = expectedOrder.get(i);
            Integer expectedSig = expectedSignificance.get(i);

            Assertions.assertEquals(expectedName, genre.getName(), String.format("%s should be at position %d.", expectedName, i));
            Assertions.assertEquals(expectedSig, genre.getSignificance(), String.format("%s's significance should be %d.", expectedName, expectedSig));
        }

        // Validate index map is correctly updated
        for (int i = 0; i < expectedOrder.size(); i++) {
            String genreName = expectedOrder.get(i);
            Assertions.assertTrue(indexMap.containsKey(genreName), "Index map should contain " + genreName);
            Assertions.assertEquals(i, (int)indexMap.get(genreName), "Index map should have correct index for " + genreName);
        }
    }


    @Test
    void testInsertionAndDeletion(){
        List<GenreData> genreDataList = new ArrayList<>();
        genreDataList.add(new GenreData("Rock", 10));
        genreDataList.add(new GenreData("Jazz", 9));
        genreDataList.add(new GenreData("Pop", 8));
        genreDataList.add(new GenreData("Classical", 7));
        genreDataList.add(new GenreData("Electronic", 6));
        genreDataList.add(new GenreData("Hip-Hop", 5));
        genreDataList.add(new GenreData("Country", 4));
        genreDataList.add(new GenreData("Reggae", 3));
        genreDataList.add(new GenreData("Blues", 2));
        genreDataList.add(new GenreData("Metal", 1));

        Map<String, Integer> indexMap = new HashMap<>();
        for (int i = 0; i < genreDataList.size(); i++) {
            indexMap.put(genreDataList.get(i).getName(), i);
        }

        System.out.println(genreDataList);
        System.out.println(indexMap);
        System.out.println("-----------------------------");
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Electronic", -555);
        AlgorithmsUtil.efficientSwap(genreDataList, indexMap, "Jazz", -222);

        System.out.println(genreDataList);
        System.out.println(indexMap);

    }

    @Test
    void testService1(){
        List<GenreData> genreDataList = new ArrayList<>();
        genreDataList.add(new GenreData("Rock", 10));
        genreDataList.add(new GenreData("Jazz", 9));
        genreDataList.add(new GenreData("Pop", 8));
        genreDataList.add(new GenreData("Classical", 7));
        genreDataList.add(new GenreData("Electronic", 6));
        genreDataList.add(new GenreData("Hip-Hop", 5));
        genreDataList.add(new GenreData("Country", 4));
        genreDataList.add(new GenreData("Reggae", 3));
        genreDataList.add(new GenreData("Blues", 2));
        genreDataList.add(new GenreData("Metal", 1));

        Map<String, Integer> indexMap = new HashMap<>();
        for (int i = 0; i < genreDataList.size(); i++) {
            indexMap.put(genreDataList.get(i).getName(), i);
        }
        List<String> relatedGenreList = new ArrayList<>();
        relatedGenreList.add("Metal");
        relatedGenreList.add("Jazz");
        relatedGenreList.add("something");
        List<String> notWantedGenreList = new ArrayList<>();
        notWantedGenreList.add("Country");

        videoSignificanceAdjustmentService.adjustGenreSignificance(indexMap, genreDataList, relatedGenreList, true);
        videoSignificanceAdjustmentService.adjustGenreSignificance(indexMap, genreDataList, notWantedGenreList, false);
        System.out.println(genreDataList);
    }



}
