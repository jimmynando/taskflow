import { useState } from "react";

import type Category from "../types/category";
import CategoryCard from "./CategoryCard";
import { categoriesList } from "../mock/categories";
import "./CategoryList.css";

function CategoryList() {
  const [categories, setCategories] = useState<Category[]>(categoriesList);

  return (
    <div className="grid grid-cols-2 gap-6 p-3">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
