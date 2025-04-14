"use client"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"
import { useTheme } from "./ThemeContext"
import { useState } from "react" // Add this import

const Navbar = () => {
  const { cartItems } = useCart()
  const { isDarkMode, toggleTheme } = useTheme()
  const [isNavExpanded, setIsNavExpanded] = useState(false) // Add state for navbar toggle

  // Toggle navbar function
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Commerce App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav} // Add onClick handler
          aria-controls="navbarNav"
          aria-expanded={isNavExpanded} // Update aria-expanded
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsNavExpanded(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={() => setIsNavExpanded(false)}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" onClick={() => setIsNavExpanded(false)}>
                Cart ({cartItems.length || 0})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout" onClick={() => setIsNavExpanded(false)}>
                Checkout
              </Link>
            </li>
            <li className="nav-item theme-toggle-container">
              <button
                className="nav-link btn theme-toggle"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <>
                    <span style={{ marginRight: "5px" }}>☀️</span> Light Mode
                  </>
                ) : (
                  <>
                    <span style={{ marginRight: "5px" }}>🌙</span> Dark Mode
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
