import React from 'react';
import './Home.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    { id: 10, name: "EMPSIGN 17.3 Inch Laptop Bagavel", price: 199.99 },
    { id: 2, name: "Amazon Basics Compact Laptop Shoulder Bag", price: 239.99 },
    { id: 3, name: "NEWSTYP Leather Letter Shoulder Bags for Women", price: 789.99 },
  ];

  const categories = ["Electronics", "Fashion", "Home & Garden"];

  const testimonials = [
    { id: 1, text: "Great products! Fast shipping.", author: "John Doe" },
    { id: 2, text: "Excellent customer service!", author: "Jane Smith" },
    { id: 3, text: "I'm very satisfied with my purchase.", author: "Mark Johnson" },
  ];

  const blogPosts = [
    { id: 1, title: "How to Choose the Right Product", date: "2024-09-01" },
    { id: 2, title: "Top 10 Products of the Year", date: "2024-08-15" },
    { id: 3, title: "Tips for Shopping Online", date: "2024-07-30" },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the E-Commerce App</h1>
      <p className="home-description">
        Welcome to my e-commerce application. Explore our products and add them to your cart!
      </p>
      <button className="home-button btn btn-primary" onClick={() => navigate('/products')}>
        Shop Now
      </button>

      <section className="featured-products home-section">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="categories home-section">
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">{category}</div>
          ))}
        </div>
      </section>

      <section className="special-offers home-section">
        <h2>Special Offers</h2>
        <p>Check out our current promotions and discounts!</p>
      </section>

      <section className="testimonials home-section">
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id}>
              <p>"{testimonial.text}"</p>
              <cite>- {testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="newsletter-signup home-section">
        <h2>Subscribe to our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="about-us home-section">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best products and customer service.</p>
      </section>

      <section className="blog-news home-section">
        <h2>Latest News</h2>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-item">
              <h3>{post.title}</h3>
              <p>Date: {post.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="social-media home-section">
        <h2>Connect with Us</h2>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </section>

      <section className="contact-info home-section">
        <h2>Contact Us</h2>
        <p>Email: support@ecommerceapp.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;