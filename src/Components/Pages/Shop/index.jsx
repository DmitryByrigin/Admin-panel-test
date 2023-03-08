import React from 'react';
import Categories from '../../Categories';
import Search from '../../Search';
import Product from '../../Product';
import ShopPagination from '../../ShopPagination';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import styles from "./Shop.module.scss";
import NotFound from '../NotFound';
export const ShopContext = React.createContext({});
const Shop = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [price, setPrice] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [items, setItems] = React.useState([]);
  // const [categoryId, setCategoryId] = React.useState(0);
  
  React.useEffect(() => {
    // const search = searchValue ? `${searchValue}`: '';
    //     categoryId > 0 ? `category=${categoryId}` : ''
    //   }&sortBy=${sortType}&order=${order}${search}`)
    // fetch(
    // `https://63e8b5335f3e35d898f44047.mockapi.io/items?page=${currentPage}&limit=4&${
    //   categoryId > 0 ? `category=${categoryId}` : ''
    // }&sortBy=${sortType}&order=${order}${search}`,
    // )
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((resp) => {
    //     setItems(resp);
    //     setIsLoading(false);
    //   });&search=${searchValue}
    axios.get(`https://63e8b5335f3e35d898f44047.mockapi.io/products?page=${currentPage}&limit=10&search=${searchValue}`).then((resp) => {
      setItems(resp.data);
    });
    window.scrollTo(0, 0);
  }, [price, categoryId,searchValue,currentPage]);

  const productsArray = items.map((obj) => {
    return <Product key={obj.id} {...obj}/>;
  });

  return (
    <ShopContext.Provider value={{
      searchValue,
      setSearchValue,
      currentPage,
      setCurrentPage
    }}>
    <>

      <div className={styles.root}>
        <Search />
        <Categories onChangeCategory={(id) => setPrice(!price)} />
        {productsArray.length > 0 ? productsArray : <NotFound/>}
        <ShopPagination/>
      </div>
    </>
    </ShopContext.Provider>

  );
};

export default Shop;
