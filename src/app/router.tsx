import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         Component: App,
//         children: [
//             {
//                 index: true,
//                 Component: Home,
//                 action: (data) => {
//                     console.log('Home')
//                     console.log('Home', data)
//                 }
//             },
//             {
//                 path: 'about',
//                 Component: About,
//                 action: (data) => {
//                     console.log('About')
//                     console.log('About', data)
//                 }
//             }
//         ]
//     }
// ])

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        action: (data) => {
            console.log("Home");
            console.log("Home", data);
        },
        
    },
    {
        path: "/about",
        Component: About,
        action: (data) => {
            console.log("About");
            console.log("About", data);
            return 'test'
        },
        loader: (data) => {
            return 'test'
        }
    },
]);
