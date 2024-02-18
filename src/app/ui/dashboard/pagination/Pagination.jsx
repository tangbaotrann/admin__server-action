import styles from "./Pagination.module.css";
import Button from "@/app/components/Button/Button";

function Pagination() {
  return (
    <div className={styles.pagination}>
      <Button disabled={true} className={styles.previousBtn}>
        Previous
      </Button>
      <Button>Next</Button>
    </div>
  );
}

export default Pagination;
