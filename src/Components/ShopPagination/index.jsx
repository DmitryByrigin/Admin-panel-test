import React from "react";
import ReactPaginate from "react-paginate";
import { ShopContext } from "../Pages/Shop";
import styles from "./ShopPagination.module.scss";
const ShopPagination = ()=>{
    const {currentPage, setCurrentPage} = React.useContext(ShopContext);
    return(
        <ReactPaginate
      className={styles.root}
        breakLabel=">"
        nextLabel=">"
        onPageChange={(event)=>{setCurrentPage(event.selected+1)}}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    )
}
export default ShopPagination;