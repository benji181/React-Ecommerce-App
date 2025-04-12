"use client"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"
import { useTheme } from "./ThemeContext"

const Navbar = () => {
  const { cartItems } = useCart()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Commerce App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart ({cartItems.length || 0})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Checkout
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn theme-toggle"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <span>☀️ Light Mode</span> : <span>🌙 Dark Mode</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
