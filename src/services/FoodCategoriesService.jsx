export const readFoodCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  return response.json();
};
export const readFoodIngredient = async ({ params }) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`);
  return response.json();
};
export const readFoodId = async ({ params }) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`);
  return response.json();
};