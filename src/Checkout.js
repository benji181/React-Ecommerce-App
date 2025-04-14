"use client"

import { useCart } from "./CartContext"
import "./Home.css"
import Footer from "./Footer"
import { useTheme } from "./ThemeContext"
import { Link } from "react-router-dom"

const Checkout = () => {
  const { cartItems } = useCart()
  const { isDarkMode } = useTheme()

  const total = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)

  return (
    <div className="container mt-4">
      <div className="checkout-container p-4">
        <h1 className="text-center mb-4">Checkout</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message text-center p-4">
            <p>Your cart is empty. Please add items to your cart before checking out.</p>
            <Link to="/products" className="btn btn-primary mt-3">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="checkout-content">
            <h2 className="mb-3">Order Summary</h2>
            <div className="order-items mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="order-item d-flex justify-content-between p-2 border-bottom">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="order-total d-flex justify-content-between p-3 mb-4 fw-bold">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <div className="shipping-info mb-4">
              <h3 className="mb-3">Shipping Information</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-12">
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="City" />
                </div>
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="State" />
                </div>
                <div className="col-md-2">
                  <input type="text" className="form-control" placeholder="Zip" />
                </div>
              </div>
            </div>

            <div className="payment-info mb-4">
              <h3 className="mb-3">Payment Information</h3>
              <div className="row g-3">
                <div className="col-12">
                  <input type="text" className="form-control" placeholder="Card Number" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Expiration Date (MM/YY)" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="CVV" />
                </div>
              </div>
            </div>

            <button className="checkout-button w-100 py-3">Complete Purchase</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
