import React, { useState } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const filteredTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  return (
    <div className="App">
      <h1>Task List</h1>

      {/* Category Filter */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* New Task Form */}
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />

      {/* Task List */}
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
