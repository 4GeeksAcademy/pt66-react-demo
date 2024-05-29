import React, { useEffect, useState } from "react";

const Home = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/655847/information?apiKey=150b3d1fc44d4503a4808decd9346790`
    );
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setRecipe(data);
    }
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8 offset-2 d-flex flex-column justify-space-around">
          <ul>
            {recipe.extendedIngredients?.map((ing, idx) => (
              <li key={idx}>{ing.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
