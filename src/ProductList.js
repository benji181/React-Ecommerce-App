"use client"

import { useEffect, useState } from "react"
import { useCart } from "./CartContext"
import Notification from "./Notification"
import Footer from "./Footer"
import ProductModal from "./productModal"
import Rating from "./Rating"
import { useTheme } from "./ThemeContext"
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [notification, setNotification] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setLoading(true)
    fetch("./products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        return response.json()
      })
      .then((data) => {
        setProducts(data)
        setFilteredProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
        setError("Unable to load products. Please try again later.")
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const results = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredProducts(results)
  }, [searchTerm, products])

  const handleAddToCart = (product) => {
    addToCart(product)
    setNotification(`Added ${product.name} to cart!`)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const handleShowDetails = (product) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  if (error) {
    return (
      <div className="container mt-4">
        <h1 className="text-center">Product List</h1>
        <p className="text-center text-danger">{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <h1>Product List</h1>
        <div className="spinner-border text-success mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading products...</p>
      </div>
    )
  }

  return (
    <div className="container mt-4 product-container">
      <h1 className="text-center mb-4">Product List</h1>
      <p className="product-list-subtitle">Shop from the very best of quality leather bags</p>

      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
      <div className="row product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div
                className="card product-card h-100"
                onClick={() => handleShowDetails(product)}
                style={{ cursor: "pointer" }}
                data-theme={isDarkMode ? "dark" : "light"}
              >
                <div className="card-img-container">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="card-img-top product-image"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title product-title">{product.name}</h5>
                  <p className="card-text product-price">${product.price.toFixed(2)}</p>
                  <div className="rating-container mb-3">
                    <Rating rating={product.rating} />
                  </div>
                  <button
                    className="btn btn-primary mt-auto add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(product)
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>{products.length === 0 ? "Loading products..." : "No products found matching your search."}</p>
          </div>
        )}
      </div>
      <Footer />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  )
}

export default ProductList
