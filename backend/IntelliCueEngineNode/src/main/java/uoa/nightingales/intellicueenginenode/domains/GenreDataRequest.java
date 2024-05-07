package uoa.nightingales.intellicueenginenode.domains;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uoa.nightingales.intellicueenginenode.pojos.GenreData;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenreDataRequest {

    private Map<String, Integer> indexMap;
    private List<GenreData> genreDataList;
    private List<String> relatedGenres;
    private Boolean isWanted;

}
