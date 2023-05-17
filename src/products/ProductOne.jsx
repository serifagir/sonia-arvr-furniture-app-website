import React from 'react';
import '.././App.scss';

const ProductOne = () => {
  return (
        <div className="product-card-popup">
        <div className="product-card-popup-left-container">
          <div className="product-card-popup-img"></div>
          <div className="product-card-popup-right-container-product-name">
            <h1>Dinner Table</h1>
          </div>
          <div className="product-card-popup-right-container-product-id">Product ID:1234gv</div>
        </div>
        
        <div className="product-card-popup-right-container">
          
          <div className="product-card-popup-right-container-product-colors">
            <h1>Colors</h1>
            <div className="product-card-popup-right-container-product-colors-div">
              <div className="product-card-popup-right-container-product-colors-circle1"></div>
              <div className="product-card-popup-right-container-product-colors-circle2"></div>
              <div className="product-card-popup-right-container-product-colors-circle3"></div>
              <div className="product-card-popup-right-container-product-colors-circle4"></div>
            </div>
          </div>
          <div className="product-card-popup-right-container-product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quas illum nemo officiis modi libero odit delectus sunt voluptas. Ut.</div>
          <div className="product-card-popup-right-container-product-qr">
            <div className="qr-heading">
              <h3>View AR</h3>
            </div>
            <div className="qr-code"></div>
          </div>
        </div>
      </div>
  )
}

export default ProductOne