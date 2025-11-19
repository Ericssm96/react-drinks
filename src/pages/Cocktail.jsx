import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async (pageData) => {
  const id = pageData.params.id;
  const response = await axios.get(`${singleCocktailUrl}${id}`);
  const data = response.data;


  return {id, data};
}

export const Cocktail = () => {
  const {data, id} = useLoaderData();
  const singleDrink = data.drinks[0];
  const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass , strInstructions: instructions } = singleDrink;
  var validIngredients = [];
  for(const [key, value] of Object.entries(singleDrink)) {
    if(key.includes("strIngredient") && value) {
      validIngredients.push(value);
    }
  }
  console.log(validIngredients)


  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">Back home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {validIngredients.map((item, index)=>{
              if(index !== validIngredients.length - 1) {
                return `${item}, `
              }

              return `${item}.`
            })}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}