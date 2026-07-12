import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MultiStepForm from "./tasks/task1-form/MultiStepForm";
import ProductList from "./tasks/task2-products/ProductList";
import Assesments from "./Pages/Assesments";
import PagenotFound from "./Pages/PagenotFound";
import Task3 from "./tasks/task3-APIFetching/Task3";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Assesments />} />
      <Route path="*" element={<PagenotFound />} />
      <Route path="/MultiStepForm" element={<MultiStepForm />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Task3" element={<Task3 />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
