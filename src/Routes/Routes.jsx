import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import CandidatesDetails from "../Pages/CandidatesDetails/CandidatesDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/candidatesdetails',
          element:<CandidatesDetails></CandidatesDetails>
        }
       
      ]
    },
    
  ]);

  export default router;