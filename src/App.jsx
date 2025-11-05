import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Cocktail, About, Newsletter, Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "cocktail",
        element: <Cocktail />
      },
      {
        path: "newsletter",
        element: <Newsletter />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};
export default App;
