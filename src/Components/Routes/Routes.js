import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Courses from "../Courses/Courses";
import Category from "../Category/Category";
import CourseFullContent from "../CourseFullContent/CourseFullContent";
import EnrollCourse from "../EnrollCourse/EnrollCourse";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([

    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },

            {
                path: '/courses/:id',
                element: <CourseFullContent></CourseFullContent>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

        ]

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },

    {
        path: '/enroll/:id',
        element: <PrivateRoute><EnrollCourse></EnrollCourse></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/enroll/${params.id}`)
    }

])