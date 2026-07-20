import { Link } from "react-router";
import type Category from "../types/category";
import "./CategoryCard.css";

function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-3 text-center">
      <p style={{ color: category.color }}>{category.name}</p>
      <Link
        style={{ color: category.color }}
        to={`/categories/${category.slug}`}
      >
        View More {`>`}
      </Link>
    </div>
  );
}

export default CategoryCard;
