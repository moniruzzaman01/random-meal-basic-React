import React from "react";
import "./Cart.css";

function Cart(props) {
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Cart</h1>
        <button>Select Random</button>
        <br />
        <button>Reset</button>
      </div>
    </div>
  );
}

export default Cart;
