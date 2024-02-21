"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import styles from "./Pagination.module.css";
import Button from "@/app/components/Button/Button";
import constants from "@/app/utils/constants";

function Pagination({ count, totalPages }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = searchParams.get("page") || 1;
  const previousPage = parseInt(currentPage) - 1;
  const nextPage = parseInt(currentPage) + 1;
  const ITEM_PER_PAGE = constants.PAGINATION_NUMBER;

  const hasPrevious = ITEM_PER_PAGE * previousPage > 0;
  const hasNext = ITEM_PER_PAGE * previousPage + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    const params = new URLSearchParams(searchParams);

    type === "Prev"
      ? params.set("page", previousPage)
      : params.set("page", nextPage);

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.pagination}>
      <Button
        disabled={!hasPrevious}
        onClick={() => handleChangePage("Prev")}
        className={styles.previousBtn}
      >
        <GrFormPrevious size={12} />
        Previous
      </Button>
      <i className={styles.pageNumber}>
        {currentPage}/{totalPages} page
      </i>
      <Button
        disabled={!hasNext}
        onClick={() => handleChangePage("Next")}
        className={styles.nextBtn}
      >
        Next
        <GrFormNext size={12} />
      </Button>
    </div>
  );
}

export default Pagination;
