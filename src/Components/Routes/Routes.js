import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Courses from "../Courses/Courses";
import Category from "../Category/Category";
import CourseSummary from "../CourseSummary/CourseSummary";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },


            {
                path: '/courses/:id',
                element: <CourseSummary></CourseSummary>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
])