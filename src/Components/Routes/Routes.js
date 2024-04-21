import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Courses from "../Courses/Courses";
import Category from "../Category/Category";
import CourseFullContent from "../CourseFullContent/CourseFullContent";
import EnrollCourse from "../EnrollCourse/EnrollCourse";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import NotFound from "../../NotFound/NotFound";
import Blog from "../Blog/Blog";



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
                loader: () => fetch('https://intellectx-server.vercel.app/courses')
            },

            {
                path: '/courses/:id',
                element: <CourseFullContent></CourseFullContent>,
                loader: ({ params }) => fetch(`https://intellectx-server.vercel.app/courses/${params.id}`)
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://intellectx-server.vercel.app/category/${params.id}`)
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
        loader: ({ params }) => fetch(`https://intellectx-server.vercel.app/enroll/${params.id}`)
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }

])


