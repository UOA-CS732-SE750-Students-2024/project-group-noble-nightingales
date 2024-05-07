package uoa.nightingales.intellicueenginenode.domains;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uoa.nightingales.intellicueenginenode.pojos.GenreData;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GenreDataResponse {

    List<GenreData> genreDataList;
    Map<String, Integer> indexMap;
}
