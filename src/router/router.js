import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../layout/Main";

 export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/login",
                element:<SignIn/>
            },
            {
                path:"/regiter",
                element:<SignUp/>
            }
        ]
        
    },
    
])