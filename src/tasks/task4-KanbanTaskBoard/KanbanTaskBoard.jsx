import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Board from "./components/Board";
import { INITIAL_TASKS, COLUMNS } from "./data/constants";

const KanbanTaskBoard = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      status: "todo",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const handleMoveTask = (taskId, direction) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== taskId) return task;

        const currentIdx = COLUMNS.indexOf(task.status);
        let nextIdx = currentIdx;

        if (direction === "right" && currentIdx < COLUMNS.length - 1) {
          nextIdx += 1;
        } else if (direction === "left" && currentIdx > 0) {
          nextIdx -= 1;
        }

        return { ...task, status: COLUMNS[nextIdx] };
      }),
    );
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === draggableId) {
          return { ...task, status: destination.droppableId };
        }
        return task;
      }),
    );
  };

  const handleDeleteTask = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (confirmed) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div className="text-slate-900 font-sans p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-5 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Kanban Board
          </h1>
        </header>

        <section className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-8 max-w-xl mx-auto">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">
            Add New Task
          </h2>
          <form className="flex flex-col gap-3" onSubmit={handleAddTask}>
            <input
              type="text"
              placeholder="Task Title (Required)"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description (Optional)"
              rows="2"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="submit"
              className="w-full sm:w-fit px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md transition-colors shadow-sm self-end"
            >
              Add Task
            </button>
          </form>
        </section>

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
