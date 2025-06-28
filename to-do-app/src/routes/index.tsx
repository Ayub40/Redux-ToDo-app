// import App from "@/App";
import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App />
        Component: App,
        children: [
            {
                // path: "tasks",
                index: true,
                Component: Tasks,
            },
            {
                path: "tasks",
                Component: Tasks,
            },
            {
                path: "users",
                Component: User,
            },
        ],
    },
]);

export default router;