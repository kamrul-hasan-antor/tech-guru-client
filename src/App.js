import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";

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
        {
          path: "/category/:id",

          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/category/${params.id}`),
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/checkout/:id",
          element: (
            <PrivateRoute>
              <Checkout></Checkout>
            </PrivateRoute>
          ),
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
