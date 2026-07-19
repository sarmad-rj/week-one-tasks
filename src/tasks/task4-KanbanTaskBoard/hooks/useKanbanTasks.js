import { useState, useCallback } from "react";
import { INITIAL_TASKS, COLUMNS } from "../data/constants";

export const useKanbanTasks = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleAddTask = useCallback((title, description) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      status: "todo",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);

  const handleMoveTask = useCallback((taskId, direction) => {
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
  }, []);

  const handleDragEnd = useCallback((result) => {
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
  }, []);

  const handleDeleteTask = useCallback((taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (confirmed) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  }, []);

  return {
    tasks,
    handleAddTask,
    handleMoveTask,
    handleDragEnd,
    handleDeleteTask,
  };
};
