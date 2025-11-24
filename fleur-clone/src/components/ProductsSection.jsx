
import React from "react";

const products = [
  { name: "Autumn Bouquet", price: "$375", rating: 5 },
  { name: "Classic Centerpiece", price: "$210", rating: 4.5 },
  { name: "Soft Pastel Arrangement", price: "$320", rating: 5 },
];

const ProductsSection = () => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-intro center">
          <h2 className="section-title">Recommended Products</h2>
          <p className="section-subtitle">
            Showcase bouquets, decor, or packages using a simple product slider
            look.
          </p>
        </div>
        <div className="products-grid">
          {products.map((p, idx) => (
            <div key={idx} className="product-card fade-in-up">
              <div className="product-image-placeholder" />
              <div className="product-content">
                <p className="product-rating">
                  {"★".repeat(Math.round(p.rating))}
                </p>
                <h3>{p.name}</h3>
                <p className="product-price">{p.price}</p>
                <button className="primary-outline-btn">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
