import { useLoaderData } from "react-router-dom";
import axios from "axios";

const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

export const loader = async () => {

  let searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);

  return {drinks: response.data.drinks, searchTerm};
}

export const Landing = () => {
  const {drinks, searchTerm} = useLoaderData();
  console.log(drinks);
  return (
    <div>Landing</div>
  )
}