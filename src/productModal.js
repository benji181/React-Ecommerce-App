"use client"
import Rating from "./Rating"
import { useCart } from "./CartContext"

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart()

  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }

  return (
    <div className="modal fade show" onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="img-fluid rounded mb-3" />
              </div>
              <div className="col-md-6">
                <div className="product-details">
                  <p className="product-price">
                    <strong>Price:</strong> <span className="text-success">${product.price.toFixed(2)}</span>
                  </p>
                  <div className="mb-3">
                    <strong>Rating:</strong> <Rating rating={product.rating} />
                  </div>
                  <p>
                    <strong>Size:</strong> {product.size}
                  </p>
                  <div className="product-description mb-4">
                    <h6>Description:</h6>
                    <p>{product.description}</p>
                  </div>
                  <div className="product-features mb-4">
                    <h6>Features:</h6>
                    <ul>
                      <li>High-quality materials</li>
                      <li>Durable construction</li>
                      <li>Stylish design</li>
                      <li>Perfect for everyday use</li>
                    </ul>
                  </div>
                  <button className="btn btn-primary w-100 mb-2" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
