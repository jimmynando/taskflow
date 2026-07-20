import type Category from "../types/category";
import "./CategoryCard.css";

function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-3 text-center">
      {category.name}
    </div>
  );
}

export default CategoryCard;
