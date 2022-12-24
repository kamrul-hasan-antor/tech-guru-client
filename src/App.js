import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseDetails from "./components/CourseDetails/CourseDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Header></Header>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
        },
        {
          path: "/courseDetails/:id",

          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/details/${params.id}`),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;