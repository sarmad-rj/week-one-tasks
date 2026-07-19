import React from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Board from "./components/Board";
import AddTaskForm from "./components/AddTaskForm";
import { useKanbanTasks } from "./hooks/useKanbanTasks";

const KanbanTaskBoard = () => {
  const {
    tasks,
    handleAddTask,
    handleMoveTask,
    handleDragEnd,
    handleDeleteTask,
  } = useKanbanTasks();

  return (
    <div className="text-slate-900 font-sans p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-5 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Kanban Board
          </h1>
        </header>

        <AddTaskForm onAddTask={handleAddTask} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <main>
            <Board
              tasks={tasks}
              handleMoveTask={handleMoveTask}
              onDeleteTask={handleDeleteTask}
            />
          </main>
        </DragDropContext>
      </div>
    </div>
  );
};

export default KanbanTaskBoard;
