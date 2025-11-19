import styled from "styled-components";
import { CocktailCard } from "./CocktailCard";

export const CocktailList = ( {drinks} ) => {

  if(!drinks) return <h4 style={{textAlign: "center"}}>No matching cocktail found.</h4>

  const formattedDrinks = drinks.map((drinkObj) => {
    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drinkObj;

    return {id: idDrink, name: strDrink, image:strDrinkThumb, info: strAlcoholic, glass: strGlass};
  })

  return (
    <Wrapper>
      {formattedDrinks.map((drink)=>{
        return (
          <CocktailCard key={drink.id} {...drink} />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;