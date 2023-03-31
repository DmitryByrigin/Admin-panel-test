import React from 'react';
import styles from './Product.module.scss';
// import {root} from "./Product.module.scss"

const Product = ({ id, name, Description, categories, price, imageURL, quantity }) => {
  return (
    <div className={styles.root} key={id}>
      <span>
        <input type="checkbox" id="product-1" />
      </span>
      <label>
        <img src={imageURL} alt="Product Image"/>
        <h3 className="product-name">{name}</h3>
      </label>
        <p className="product-category">{categories}</p>
        <p className="product-price">{price}</p>
        <label for="product-1-quantity">{quantity}</label>
        {/* <input type="number" id="product-1-quantity" name="product-1-quantity" value="1" /> */}
      
    </div>
  );
};
export default Product;
