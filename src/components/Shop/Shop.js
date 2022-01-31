import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import {Link} from 'react-router-dom'
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  // Products to be render on the UI
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch(`https://evening-meadow-07425.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
        
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const exists = cart.find(pd => pd.key === product.key);
    let newCart = [];
    if (exists) {
        const rest = cart.filter(pd => pd.key !== product.key);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, product];
    }
    else {
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);

}

  const handleSearch = (event) => {
    const searText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
    console.log(matchedProducts.length);
  };

  return (
    <div>
      <div className="search-container">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}

        
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/order">
              <button className="btn-regular">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
