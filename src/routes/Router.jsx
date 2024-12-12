import { App } from "@/App";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { DHome } from "@/pages/dashboard/pages/home/DHome";
import { DLessons } from "@/pages/dashboard/pages/lessons/DLessons";
import { DVocabulary } from "@/pages/dashboard/pages/vocabulary/DVocabulary";
import { Home } from "@/pages/home/Home";
import { Lessons } from "@/pages/lessons/Lessons";
import { SingleLesson } from "@/pages/lessons/SingleLesson";
import { Login } from "@/pages/login/Login";
import { Signup } from "@/pages/signup/Signup";
import { Tutorials } from "@/pages/tutorials/Tutorials";
import { Vocabulary } from "@/pages/vocabulary/Vocabulary";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lessons",
        element: <Lessons />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/lessons/:id",
        element: <SingleLesson />,
        children: [
          {
            path: "/lessons/:id/:slug",
            element: <Vocabulary />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DHome />,
      },
      {
        path: "/dashboard/lessons",
        element: <DLessons />,
      },
      {
        path: "/dashboard/vocabulary",
        element: <DVocabulary />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
