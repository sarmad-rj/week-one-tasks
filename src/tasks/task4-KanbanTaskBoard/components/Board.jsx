import React from "react";
import Column from "./Column";

const Board = ({ tasks, handleMoveTask, onDeleteTask }) => {
  const COLUMNS_CONFIG = [
    { id: "todo", title: "To Do", accent: "bg-amber-500" },
    { id: "in-progress", title: "In Progress", accent: "bg-blue-500" },
    { id: "done", title: "Done", accent: "bg-emerald-500" },
  ];

  return (
    <div className="w-full flex bg-white border border-slate-300 divide-x divide-slate-300 rounded-xl overflow-hidden shadow-sm">
      {COLUMNS_CONFIG.map((col) => {
        const filteredTasks = tasks.filter((task) => task.status === col.id);

        return (
          <Column
            key={col.id}
            title={col.title}
            accentColor={col.accent}
            tasks={filteredTasks}
            handleMoveTask={handleMoveTask}
            id={col.id}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
    </div>
  );
};

export default Board;
