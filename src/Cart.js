import React from 'react';
import { useCart } from './CartContext';
import './Home.css'
import Footer from './Footer';
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mt-4">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="row align-items-center cart-item">
            <div className="col-md-8">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price.toFixed(2)}</span>
            </div>
            <div className="col-md-4">
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <Footer/>
    </div>
  );
};

export default Cart;
