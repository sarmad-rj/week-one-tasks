import React from "react";
import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";

const Column = ({
  title,
  accentColor = "bg-slate-400",
  tasks,
  handleMoveTask, id
}) => {
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
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap-4 overflow-y-auto pr-1 flex-1 min-h-[400px]"
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                handleMoveTask={handleMoveTask}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
