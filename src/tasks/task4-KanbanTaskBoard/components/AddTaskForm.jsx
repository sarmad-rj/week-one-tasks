import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  };

  return (
    <section className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-8 max-w-xl mx-auto">
      <h2 className="text-sm font-semibold text-slate-700 mb-3">
        Add New Task
      </h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
  );
};

export default React.memo(AddTaskForm);
