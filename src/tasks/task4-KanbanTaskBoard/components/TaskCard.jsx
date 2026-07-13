import React from "react";
import { LuTrash2, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const TaskCard = ({ task, handleMoveTask }) => {
  return (
    <div className="group p-3.5 rounded-xl hover:bg-slate-50 border border-slate-300 hover:border-slate-200 transition-all duration-150 cursor-grab active:cursor-grabbing shadow-sm bg-white">
      <h4 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">
        {task.title}
      </h4>

      {task.description && (
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-3">
        <button className="text-xs font-medium text-red-600 hover:text-rose-600 transition-colors flex items-center gap-1">
          <LuTrash2 className="w-3.5 h-3.5" />
          Delete
        </button>

        <div className="flex gap-1">
          {task.status !== "todo" && (
            <button
              onClick={() => handleMoveTask(task.id, "left")}
              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded transition-colors"
              title="Move Left"
            >
              <LuChevronLeft className="w-4 h-4" />
            </button>
          )}
          {task.status !== "done" && (
            <button
              onClick={() => handleMoveTask(task.id, "right")}
              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded transition-colors"
              title="Move Right"
            >
              <LuChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
