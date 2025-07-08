import { createBrowserRouter } from "react-router";
import App from '../App';
import  AddBook from "@/pages/Home/Home/AddBook";
import BorrowSummary from "@/pages/Home/Home/BorrowSummary";
import AllBooks from "../pages/Home/AllBooks";
import EditBook from "@/pages/Home/Home/EditBook";
import ViewDetails from "@/pages/Home/Home/ViewDetails";
import BorrowBook from "@/pages/Home/Home/BorrowBook";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <AllBooks></AllBooks>,
      },
      {
      
        path: "/books",
        element: <AllBooks></AllBooks>,
      },
      {
      
        path: "add-book",
        element:<AddBook></AddBook> ,
      },
      {
      
        path: "edit-book/:id",
        element:<EditBook></EditBook> ,
      },
      {
        path: "/books/:id",
        element: <ViewDetails></ViewDetails>,
      },
        {
        path: "/borrow/:id",
        element: <BorrowBook></BorrowBook>,
      },
      {
        path: "borrow-summary",
        element: <BorrowSummary></BorrowSummary>,
      },
      
    ]
  }
]);

export default router;
