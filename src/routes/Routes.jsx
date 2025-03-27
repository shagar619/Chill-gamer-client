import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import AddReview from "../Pages/AddReview";
import PrivateRoutes from "./PrivateRoutes";
import DetailsReview from "../Pages/DetailsReview";
import AllReviews from "../Pages/AllReviews";
import MyReview from "../Pages/MyReview";
import UpdateGame from "../Pages/UpdateGame";
import WatchList from "../Pages/WatchList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1 className="text-5xl">ERROR PAGE</h1>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/signin",
                element: <SignIn></SignIn>
            },

            {
                path: "/add-review",
                element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>
            },

            {
                path: "/review/:id",
                element: <PrivateRoutes><DetailsReview></DetailsReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://chill-gamer-server-lyart.vercel.app/review/${params.id}`)
            },

            {
                path: "/all-review",
                element: <AllReviews></AllReviews>
            },

            {
                path: "/my-reviews",
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },

            {
                path: "/updateGame/:id",
                element: <PrivateRoutes><UpdateGame></UpdateGame></PrivateRoutes>,
                loader: ({params}) => fetch(`https://chill-gamer-server-lyart.vercel.app/review/${params.id}`)
            },

            {
                path: "/watchList",
                element: <PrivateRoutes><WatchList></WatchList></PrivateRoutes>
            }

        ]
    },
    ]);


export default router;