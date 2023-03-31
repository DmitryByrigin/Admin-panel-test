import React from 'react';
import Styles from './Categories.module.scss';
const Categories = () => {
  return (
    <div className={Styles.root}>
      <span>
        <input type="checkbox" width="52px" />
      </span>
      <p>Name</p>
      <p>Category</p>
      <p>Price</p>
      <p>Quantity</p>
    </div>
  );
};
export default Categories;
