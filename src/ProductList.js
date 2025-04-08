import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import Notification from './Notification';
import Footer from './Footer';
import ProductModal from './productModal';
import Rating from './Rating'; // Import the Rating component

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('./products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`Added ${product.name} to cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Product List</h1>
      <p
        style={{
          color: 'purple',
          fontSize: '24px',
          textAlign: 'center',
        }}
      >
        Shop from the very best of quality leather bags
      </p>

      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card" onClick={() => handleShowDetails(product)} style={{ cursor: 'pointer' }}>
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
  <h5 className="card-title">{product.name}</h5>
  <p className="card-text">${product.price.toFixed(2)}</p>
  <Rating rating={product.rating} /> {/* Works with Font Awesome */}
  <button
    className="btn btn-primary mt-2"
    onClick={(e) => {
      e.stopPropagation();
      handleAddToCart(product);
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
            <p>No products found matching your search.</p>
          </div>
        )}
      </div>
      <Footer />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProductList;