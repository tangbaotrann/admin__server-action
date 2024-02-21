import Link from "next/link";
import dayjs from "dayjs";

import styles from "@/app/ui/dashboard/products/Products.module.css";
import Button from "../Button/Button";
import Image from "../Image/Image";

function ProductItem({ product }) {
  return (
    <>
      <td>
        <div className={styles.info}>
          <Image
            src={product.image || "/noproduct.jpg"}
            alt="img-avt"
            className={styles.avatarImage}
          />
          {product.title}
        </div>
      </td>
      <td>{product.desc}</td>
      <td>${product.price}</td>
      <td>
        {dayjs(product.createdAt).format("DD/MM/YYYY") ||
          dayjs(new Date()).format("DD/MM/YYYY")}
      </td>
      <td>{product.stock}</td>
      <td>
        <div className={styles.actions}>
          <Link href={`/dashboard/products/${product._id}`}>
            <Button className={styles.viewBtn}>View</Button>
          </Link>
          <Button className={styles.deleteBtn}>Delete</Button>
        </div>
      </td>
    </>
  );
}

export default ProductItem;
