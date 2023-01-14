import { CategoriesType } from "../components/MainMenu";
import { singleCategoryType } from "../types/universal";
import { convertSwedishChars } from "./convertSwedishChars";

export function filterByParent(list: CategoriesType, hasParent: string | null) {
  return list.filter((listItem: singleCategoryType) => {
    if (hasParent === undefined) return
    if (!listItem.parent && !hasParent) return listItem
    if (!listItem.parent || !hasParent) return
    if (convertSwedishChars(listItem.parent.toLowerCase()) === convertSwedishChars(hasParent.toLowerCase())) return listItem
  })
}