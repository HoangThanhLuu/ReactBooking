
import Home from "../pages/home/Home";
import Hotel from "../pages/hotel/Hotel";
import List from "../pages/list/List";

export const addRoute = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/hotels',
        element: List
    },
    {
        path: '/hotels/:id',
        element: Hotel
    },
]