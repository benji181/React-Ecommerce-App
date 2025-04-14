"use client"
import { useCart } from "./CartContext"
import "./Home.css"
import Footer from "./Footer"
import { useTheme } from "./ThemeContext"

const Cart = () => {
  const { cartItems, removeFromCart } = useCart()
  const { isDarkMode } = useTheme()

  return (
    <div className="container mt-4 cart-container">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message text-center p-5">
          <p>Your cart is empty.</p>
          <p className="mt-3">Add some products to your cart to see them here.</p>
        </div>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item) => (
            <div key={item.id} className="row align-items-center cart-item p-3 mb-3">
              <div className="col-md-8 mb-2 mb-md-0">
                <span className="cart-item-name d-block mb-1">{item.name}</span>
                <span className="cart-item-price d-block">${item.price.toFixed(2)}</span>
              </div>
              <div className="col-md-4 text-md-end">
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total mt-4 p-3 text-end">
            <h4>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h4>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Cart
