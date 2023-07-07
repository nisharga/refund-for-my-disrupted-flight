import { createBrowserRouter } from "react-router-dom";
import MultiStepForm from "../Components/MultiStepForm/MultiStepForm";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Contact from "../Components/Contact/Contact";
import Policies from "../Components/Policies/Policies";
import LetterHistory from "../Components/LetterHistory/LetterHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <MultiStepForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/feedback_contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: "/policies",
        loader: () => fetch("airlines.json"),
        element: (
          <PrivateRoute>
            <Policies />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <SignIn />,
      },

      {
        path: "/letter_history",
        element: <LetterHistory />,
      },

      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);
