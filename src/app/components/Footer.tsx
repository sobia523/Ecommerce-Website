
 import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    
    <footer>
      
        <div className="container">
            <div className="col-2">
            <h3>Company Info</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div className="col-2">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div className="col-3">
                <h3>Features</h3>
                <ul>
                    <li><a href="#">Business Marketing</a></li>
                    <li><a href="#">User Analytic</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Unlimited Support</a></li>
                </ul>
            </div>
            <div className="col-3">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">IOS & Android</a></li>
                    <li><a href="#">Watch a demo</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">API</a></li>
                </ul>
            </div>
            <div className="col-4">
                <h3>Get in Touch</h3>
                <form>
                    <i className="far fa-envelope"></i>
                    <input type="email" placeholder="Enter your email" required />
                    <button><i className="fas fa-arrow-right"></i></button>
                </form>
                <div className="foot">
      
      <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
      </div> 
            </div>
        </div>
        <div className="footer-2">
            <p>Made with Love by Finland All Rights Reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;







