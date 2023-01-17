import { useParams } from "react-router-dom";
import { categories } from "../db/categories.js";
import { singleCategoryType } from "../types/universal.js";
import { convertSwedishChars } from "../utils/convertSwedishChars.js";
import { filterByParent } from "../utils/filterByParent.js";

export default function Category() {
  const { name: param } = useParams();
  const filteredCategories = filterByParent(categories, param as string)
  const categoryTitle = categories.find(menuObj => {
    return convertSwedishChars(menuObj.menu.toLocaleLowerCase()) === param
  })

  return (
    <>
      <h1>{categoryTitle ? categoryTitle.menu : "Category unknown"}</h1>
      <div className="categoriesPage">
        {filteredCategories ? filteredCategories.map(category => <CategoryCard category={category} key={category.menu} />) : null}
      </div>
    </>
  )
}

function CategoryCard({ category }: { category: singleCategoryType }) {
  return (
    <div className="categoryCard">
      <h2>{category.menu}</h2>
    </div>
  )
}