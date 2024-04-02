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
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => ('http://localhost:5000/courses')
            },

            {
                path: '/summary',
                element: <CourseSummary></CourseSummary>
            },

            {
                path: '/category',
                element: <Category></Category>,
                loader: () => ('http://localhost:5000/category')
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