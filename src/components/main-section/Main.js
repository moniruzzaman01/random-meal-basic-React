import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Meal from "../meal/Meal";
import "./Main.css";

function Main() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("meals.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <div className="main">
      <div className="meals">
        {meals.map((meal, key) => (
          <Meal key={key} meal={meal}></Meal>
        ))}
      </div>
      <Cart></Cart>
    </div>
  );
}

export default Main;
