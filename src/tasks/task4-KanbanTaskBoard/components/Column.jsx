import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, accentColor = "bg-slate-400", tasks }) => {
  return (
    <div className="flex flex-col flex-1 w-1/3 min-w-0 p-5 h-fit min-h-[50vh]">
      <div className="flex items-center justify-between gap-2 mb-5">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-2 h-2 rounded-full shrink-0 ${accentColor}`} />
          <h3 className="font-bold text-slate-700 text-xs tracking-wider uppercase truncate">
            {title}
          </h3>
        </div>
        <span className="text-xs font-medium text-slate-500">
          {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
        </span>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto pr-1">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
