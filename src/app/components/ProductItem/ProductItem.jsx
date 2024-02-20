import styles from "@/app/ui/dashboard/products/Products.module.css";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Link from "next/link";

function ProductItem() {
  return (
    <>
      <td>
        <div className={styles.info}>
          <Image
            src="/noproduct.jpg"
            alt="img-avt"
            className={styles.avatarImage}
          />
          ios
        </div>
      </td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
      <td>$11.1</td>
      <td>Oct 24 2024</td>
      <td>34</td>
      <td>
        <div className={styles.actions}>
          <Link href="/dashboard/products/id">
            <Button className={styles.viewBtn}>View</Button>
          </Link>
          <Button className={styles.deleteBtn}>Delete</Button>
        </div>
      </td>
    </>
  );
}

export default ProductItem;
