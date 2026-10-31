import { createBrowserRouter } from "react-router";
import PublicLayout from "./components/layout/publicLayout";
import HomePages from "./components/pages/HomePages";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
    ],
  },
]
);
