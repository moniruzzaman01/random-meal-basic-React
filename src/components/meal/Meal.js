import React from "react";
import "./Meal.css";

function Meal({ meal }) {
  console.log(meal);
  const { idMeal, strMeal, strMealThumb, price } = meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <div className="details">
        <h3>{strMeal}</h3>
        <p>ID: {idMeal}</p>
        <p>Price: {price} </p>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default Meal;
