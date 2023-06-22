import { createBrowserRouter } from "react-router-dom";
import MultiStepForm from "../Components/MultiStepForm/MultiStepForm";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../layout/Main";

 export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element : <MultiStepForm/>
            },
            {
                path:"/login",
                element:<SignIn/>
            },
            {
                path:"/register",
                element:<SignUp/>
            }
        ]
        
    },
    
])