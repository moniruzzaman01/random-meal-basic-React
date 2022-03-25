import React from "react";
import "./Cart.css";

function Cart({ cart, resetBtnHandle, RandomNumberGenerator }) {
  console.log("from cart", cart.length);

  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Cart</h1>
        {cart.map((meal, key) => (
          <li key={key}>{meal.strMeal}</li>
        ))}
        <button onClick={RandomNumberGenerator}>Select Random</button>
        <br />
        <button onClick={resetBtnHandle}>Reset</button>
      </div>
    </div>
  );
}

export default Cart;
