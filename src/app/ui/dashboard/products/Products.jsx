import Link from "next/link";

import styles from "./Products.module.css";
import Button from "@/app/components/Button/Button";
import Search from "@/app/components/Search/Search";
import Pagination from "../pagination/Pagination";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import { fetchProducts } from "@/app/utils/data";

async function Products({ qSearch, pagination }) {
  const { count, totalPages, products } = await fetchProducts(
    qSearch,
    pagination
  );

  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />

        <Link href="/dashboard/products/add">
          <Button className={styles.btnAddNewProd}>Add new</Button>
        </Link>
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
            {products.map((product) => (
              <tr key={product._id}>
                <ProductItem product={product} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination count={count} totalPages={totalPages} />
    </div>
  );
}

export default Products;
