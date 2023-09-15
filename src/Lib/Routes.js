import Details from "../Pages/Details";
import Home from "../Pages/Home";


const routes = [
    {
        "path": "",
        "Component": Home
    },
    {
        "path": "/details/:id",
        "Component": Details
    }
]

export default routes