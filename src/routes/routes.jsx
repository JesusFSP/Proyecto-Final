import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrimaryLayout from "../layouts/PrimaryLayout";
import NotFoundPage from "../pages/NotFoundPage";
import FoodPage from "../pages/FoodPage";
import RecetaPage from "../pages/RecetaPage";
import { readFoodCategories, readFoodId, readFoodIngredient } from "../services/FoodCategoriesService";
import FormPAge from "../pages/FormPage";
import PlatoPage from "../pages/PlatoPage";
import DrinksCategoryPage from "../pages/DrinksCategoryPage";
import { readDrink, readDrinks, readDrinksCategories } from "../services/DrinkService";
import CocktailsPage from "../pages/CoctailsPage";
import CocktailPage from "../pages/CocktailPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout/>,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      
      {
        path: 'bebidas',
        element: <DrinksCategoryPage/>,
        loader: readDrinksCategories
      },
      {
        path: 'cocteles/:strCategory',
        element: <CocktailsPage/>,
        loader: readDrinks
      },
      {
        path: 'coctel/:idDrink',
        element: <CocktailPage/>,
        loader: readDrink
      },
      {
        path: 'food',
        element: <FoodPage />,
        loader: readFoodCategories
      },
      {
        path: 'receta/:strCategory',
        element: <RecetaPage />,
        loader: readFoodIngredient
      },
      {
        path: 'plato/:idMeal',
        element: <PlatoPage />,
        loader: readFoodId
      },
      {
        path: 'contacto',
        element: <FormPAge />,
      },
      
    ]
  },
]);