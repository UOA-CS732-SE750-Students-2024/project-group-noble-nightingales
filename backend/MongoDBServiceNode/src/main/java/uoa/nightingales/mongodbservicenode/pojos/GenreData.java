package uoa.nightingales.mongodbservicenode.pojos;

import lombok.Data;
import uoa.nightingales.mongodbservicenode.enums.Genre;

@Data
public class GenreData {

    private String name;
    private Integer significance;

    public void setName(Genre genre){
        this.name = genre.name();
    }
}
