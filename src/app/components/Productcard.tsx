import React from 'react';
import Link from 'next/link';

const HeroSection= () => {
  return (
<section className="gallery-container">
      <div className="gallery-item">
        <img src="product-cover-5.png" alt="1" />
        <h4>Product 1</h4>
        <p>$20.00</p>
      </div>
      <div className="gallery-item">
        <img src="product-cover-5 (1).png" alt="2" />
        <h4>Product 2</h4>
        <p>$35.00</p>
      </div>
      <div className="gallery-item">
        <img src="product-cover-5 (2).png" alt="3" />
        <h4>Product 3</h4>
        <p>$40.00</p>
      </div>
      <div className="gallery-item">
        <img src="product-cover-5 (3).png" alt="Product 4" />
        <h4>Product 4</h4>
        <p>$25.00</p>
      </div>
      <div className="gallery-item">
        <img src="product-cover-5 (4).png" alt="Product 5" />
        <h4>Product 5</h4>
        <p>$30.00</p>
      </div>
      <div className="gallery-item">
        <img src="product-cover-5 (5).png" alt="" />
        <h4>Product 6</h4>
        <p>$50.00</p>
      </div>
    </section>
   
    
  )}
  export default HeroSection;