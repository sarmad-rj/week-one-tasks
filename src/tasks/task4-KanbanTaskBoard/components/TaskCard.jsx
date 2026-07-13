import React from "react";
import { LuTrash2, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const TaskCard = () => {
  return (
    <div className="group p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-150 transition-all duration-150 cursor-grab active:cursor-grabbing">
      <h4 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">
        Design Database Schema
      </h4>

      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        voluptate culpa repellendus molestias quisquam quos.
      </p>

      <div className="flex items-center justify-between mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <button className="text-xs font-medium text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1">
          <LuTrash2 className="w-3.5 h-3.5" />
          Delete
        </button>

        <div className="flex gap-1">
          <button
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded transition-colors"
            title="Move Left"
          >
            <LuChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded transition-colors"
            title="Move Right"
          >
            <LuChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
