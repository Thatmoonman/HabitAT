import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
// import Record from "./components/Record";
// import RecordList from "./components/RecordList";
import "./index.css";
import MyHabits from "./components/MyHabits";
import SuggestedHabits from "./components/SuggestedHabits";
import HabitCalendar from "./components/Calendar/HabitCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MyHabits />
      },
    ],
  },
  // {
  //   path: "/edit/:id",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/edit/:id",
  //       element: <Record />,
  //     },
  //   ],
  // },
  // {
  //   path: "/create",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/create",
  //       element: <Record />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);