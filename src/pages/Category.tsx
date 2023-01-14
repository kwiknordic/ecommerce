import { useParams } from "react-router-dom";
import { categories } from "../db/categories.js";
import { singleCategoryType } from "../types/universal.js";
import { filterByParent } from "../utils/filterByParent.js";

export default function Category() {
  const { name: param } = useParams();
  const filteredCategories = filterByParent(categories, param as string)
  const categoryTitle = filteredCategories.at(0)?.parent ?? "Category not found"

  return (
    <>
      <h1>{categoryTitle}</h1>
      <div className="categoriesPage">
        {filteredCategories.map(category => <CategoryCard category={category} />)}
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