import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import WatchVideoPage from "../WatchVideoPage"
import Body from "../Body"

const appRouter = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "watch/:vid",  //dynamic routing
            element: <WatchVideoPage />
        }
    ]
}])

export default appRouter

