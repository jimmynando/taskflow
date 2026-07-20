import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { categoriesList } from "../mock/categories";
import { tasksList } from "../mock/tasks";
import type Task from "../types/task";
import type Category from "../types/category";
import TaskCard from "../components/TaskCard";
import NoTaskFound from "../components/NoTaskFound";
import NoCategoryFound from "../components/NoCategoryFound";

export default function CategoryPage() {
  const { slug } = useParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    const category = categoriesList.find((category) => category.slug === slug);

    if (!category) return;

    setCategory(category);

    const tasksFetch = tasksList.filter(
      (task) => task.categoryId === category?.id,
    );

    setTasks(tasksFetch);
  }, []);

  if (!category) return <NoCategoryFound />;

  if (!tasks || tasks.length === 0) return <NoTaskFound />;

  return (
    <div>
      <p style={{ color: category.color }}>{category.name}</p>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
