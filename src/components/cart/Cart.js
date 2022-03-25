import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  // console.log("from cart", cart);
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Cart</h1>
        {cart.map((meal, key) => (
          <li key={key}>{meal.strMeal}</li>
        ))}
        <button>Select Random</button>
        <br />
        <button>Reset</button>
      </div>
    </div>
  );
}

export default Cart;
