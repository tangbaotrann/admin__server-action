"use client";

import styles from "./Products.module.css";
import Button from "@/app/components/Button/Button";
import Search from "@/app/components/Search/Search";
import Pagination from "../pagination/Pagination";
import ProductItem from "@/app/components/ProductItem/ProductItem";

function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Button className={styles.btnAddNewProd}>Add new</Button>
      </div>

      {/* table */}
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Create at</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <ProductItem />
            </tr>
            <tr>
              <ProductItem />
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}

export default Products;
