import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Cocktail, About, Newsletter, Error, SinglePageError } from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader
      },
      {
        path: "cocktail/:id",
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
