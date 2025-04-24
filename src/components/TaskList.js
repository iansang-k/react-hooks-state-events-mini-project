import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text} // Using 'text' as a key to ensure uniqueness
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.text)} // Delete by task text
        />
      ))}
    </div>
  );
}

export default TaskList;
