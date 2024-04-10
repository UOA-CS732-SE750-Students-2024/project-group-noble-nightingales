package uoa.nightingales.aiservicenode.utils;

import java.util.List;
import java.util.Set;

public class CategoryCheck {
    public static void CategoryExist(Set<String> allCategoriesSet, List<String> responseCategories){
        for (String category : responseCategories) {
            if (!allCategoriesSet.contains(category)) {
                throw new RuntimeException("Invalid category found: " + category);
            }
        }
    }
}
