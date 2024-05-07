package uoa.nightingales.aiservicenode.utils;

import java.util.List;
import java.util.Set;
import java.util.function.Function;
import java.util.function.Predicate;

public class CategoryCheck {
    public static List<String> CategoryExist(Set<String> allCategoriesSet, List<String> responseCategories){

        return responseCategories.stream()
                .map(s -> s.replace(" ", "_"))
                .filter(allCategoriesSet::contains).toList();
    }
}
