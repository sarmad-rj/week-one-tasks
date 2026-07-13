import React from "react";
import Column from "./Column";

const Board = () => {
  return (
    <div className="w-full flex bg-white border border-slate-300 divide-x divide-slate-300 overflow-hidden">
      <Column title="To Do" accentColor="bg-amber-500" />
      <Column title="In Progress" accentColor="bg-blue-500" />
      <Column title="Done" accentColor="bg-emerald-500" />
    </div>
  );
};

export default Board;


