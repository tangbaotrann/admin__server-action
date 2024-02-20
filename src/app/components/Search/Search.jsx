"use client";

import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "@/app/ui/dashboard/navbar/navbar.module.css";

function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (e) => {
    const searchValue = e.target.value;
    const qName = "q";
    const params = new URLSearchParams(searchParams);

    if (searchValue) {
      params.set(qName, searchValue);
    } else {
      params.delete(qName);
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.searchDetail}>
      <MdSearch size={18} className={styles.iconSearch} />

      <input
        type="text"
        className={styles.inputSearch}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
