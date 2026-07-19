export const COLUMNS_CONFIG = [
  { id: "todo", title: "To Do", accent: "bg-amber-500" },
  { id: "in-progress", title: "In Progress", accent: "bg-blue-500" },
  { id: "done", title: "Done", accent: "bg-emerald-500" },
];

export const COLUMNS = COLUMNS_CONFIG.map((col) => col.id); 

export const INITIAL_TASKS = [
  {
    id: "1",
    title: "Design Database Schema",
    description: "XXXXXXXXXXXXXXXXXXXXXX",
    status: "todo",
  },
  {
    id: "2",
    title: "Develop API",
    description: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Deploy Prototype",
    description: "XXXXXXXXXXXXXXXXXXXX",
    status: "done",
  },
];