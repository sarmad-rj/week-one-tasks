import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MultiStepForm from "./tasks/task1-form/MultiStepForm";
import ProductList from "./tasks/task2-products/App";
import Assesments from "./Pages/Assesments";
import PagenotFound from "./Pages/PagenotFound";
import Pokemons from "./tasks/task3-APIFetching/Pokemons";
import KanbanTaskBoard from "./tasks/task4-KanbanTaskBoard/KanbanTaskBoard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Assesments />} />
      <Route path="*" element={<PagenotFound />} />
      <Route path="/MultiStepForm" element={<MultiStepForm />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Pokemons" element={<Pokemons />} />
      <Route path="/KanbanTaskBoard" element={<KanbanTaskBoard />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
