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
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
                  color: isDarkMode ? "#fff" : "#333",
                  border: "1px solid",
                  borderColor: isDarkMode ? "#444" : "#ddd",
                  marginLeft: "10px",
                }}
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
