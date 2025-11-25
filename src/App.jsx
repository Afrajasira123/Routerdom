import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Teams from "./pages/Teams";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import About from "./pages/About";
// import Course from "./pages/course";
// import Home from "./pages/Home";
import { About, Course, Home, Login, Teams } from "./pages";
import HomeLayout from "./pages/HomeLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/teams", element: <Teams /> },
        { path: "/about", element: <About /> },
        { path: "/course", element: <Course /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/about", element: <About /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
