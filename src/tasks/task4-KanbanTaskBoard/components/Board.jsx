import React from "react";
import Column from "./Column";
import { COLUMNS_CONFIG } from "../data/constants";

const Board = ({ tasks, handleMoveTask, onDeleteTask }) => {
  return (
    <div className="w-full flex bg-white border border-slate-300 divide-x divide-slate-300 rounded-xl overflow-hidden shadow-sm">
      {COLUMNS_CONFIG.map((col) => {
        const filteredTasks = tasks.filter((task) => task.status === col.id);

        return (
          <Column
            key={col.id}
            id={col.id}
            title={col.title}
            accentColor={col.accent}
            tasks={filteredTasks}
            handleMoveTask={handleMoveTask}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
    </div>
  );
};

export default Board;
