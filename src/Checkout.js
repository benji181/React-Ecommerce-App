import React from 'react';
import { useCart } from './CartContext';
import './Home.css'; // Make sure to import your CSS
import Footer from './Footer';
const Checkout = () => {
    const { cartItems } = useCart(); // Access cart items

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Please add items to your cart before checking out.</p>
            ) : (
                <div>
                    <h2>Items in your cart:</h2>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.name} - ${item.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <h3>
                        Total: $
                        {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                    </h3>
                    {/* Add a button for finalizing checkout, etc. */}
                    <button className="checkout-button">Proceed to Payment</button>
                </div>
            )}
               <Footer/>
 </div>
    );
};

export default Checkout;
