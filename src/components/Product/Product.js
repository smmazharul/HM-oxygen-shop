import React from 'react';
import './Product.css';
import Rating from 'react-rating'
const Product = (props) => {
  
    const {name,img,price,stock,seller,star}=props.product
    return (
      <div className="product">
        <img src={img} alt="" />

        <div className="product-Data">
          <h5 className="product-name">{name}</h5>
          <p>
            <small>By: {seller}</small>
          </p>
          <p>Price: {price}</p>
          <p>
            <small>Only {stock} left in stock - order soon</small>
          </p>
          <Rating
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            
            
            
            readonly
        />
          <br />
          <br />

          <button
            onClick={() => props.handleAddToCart(props.product)}
            className="btn-regular"
          >
            <i class="fas fa-shopping-cart"></i>Add to Cart
          </button>
        </div>
      </div>
    );
};

export default Product;