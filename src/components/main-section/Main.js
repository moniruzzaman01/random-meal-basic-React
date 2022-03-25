import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Meal from "../meal/Meal";
import "./Main.css";

function Main() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("meals.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  const addCartbtnHandle = (meal) => {
    const isExist = cart.find((data) => data.idMeal === meal.idMeal);
    // console.log(cart.length);
    if (cart.length < 4 && !isExist) {
      const newCart = [...cart, meal];
      setCart(newCart);
    } else if (cart.length > 3) {
      alert("you can add four items.");
    }
  };

  const RandomNumberGenerator = () => {
    if (cart && cart.length === 4) {
      const data = Math.round(Math.random() * 3);
      console.log(cart[data]);
      const newCart = [cart[data]];
      setCart(newCart);
    } else {
      alert("select four items.");
    }
  };
  //   console.log(cart);
  const resetBtnHandle = () => {
    setCart([]);
  };

  return (
    <div className="main">
      <div className="meals">
        {meals.map((meal, key) => (
          <Meal
            key={key}
            meal={meal}
            addCartbtnHandle={addCartbtnHandle}
          ></Meal>
        ))}
      </div>
      <Cart
        cart={cart}
        resetBtnHandle={resetBtnHandle}
        RandomNumberGenerator={RandomNumberGenerator}
      ></Cart>
    </div>
  );
}

export default Main;
