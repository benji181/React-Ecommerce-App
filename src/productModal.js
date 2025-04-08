import React from 'react';
import Rating from './Rating'; // Import the Rating component

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={product.image} alt={product.name} className="img-fluid mb-3" />
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Size:</strong> {product.size}</p>
            <p><strong>Rating:</strong> <Rating rating={product.rating} /></p> {/* Add rating here */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;