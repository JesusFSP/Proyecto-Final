export const readDrinksCategories = async () => {
    const response = await fetch('http://localhost:5173/src/mocks/categories.json');
    return response;
  };
  
  export const readDrinks = async ({ params }) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.strCategory}`);
    return response.json();
  };
  
  export const readDrink = async ({ params }) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idDrink}`);
    return response.json();
  };
  