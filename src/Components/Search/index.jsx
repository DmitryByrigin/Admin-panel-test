import React from 'react';
import { ShopContext } from '../Pages/Shop';
import styles from './Search.module.scss';

const Search = (onChangeSearchValue) => {
    const {searchValue, setSearchValue} = React.useContext(ShopContext);
    const onChangeInput = (value)=>{
        console.log(value);
        setSearchValue(value);
    }
   return(
    <div className={styles.root}>
        <h1>Products</h1>
        <form action=''>
            <input placeholder='Search products' onChange={(event)=>onChangeInput(event.target.value)}/>
            <button><a href="/cart">Purchase</a></button>
        </form>
    </div>
   )
};
export default Search;
