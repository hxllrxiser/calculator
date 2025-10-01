import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
                action: (data) => {
                    console.log('Home')
                    console.log('Home', data)
                }
            },
            {
                path: 'about/:id?',
                Component: About,
                action: async ({ request }) => {
                    const formData = await request.formData()

                    const keys = formData.keys()

                    console.log('About')
                    console.log('About', Array.from( keys ))
                },
                
            }
        ]
    }
])