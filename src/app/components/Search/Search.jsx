import { MdSearch } from "react-icons/md";

import styles from "@/app/ui/dashboard/navbar/navbar.module.css";

function Search({ placeholder }) {
  return (
    <div className={styles.searchDetail}>
      <MdSearch size={18} className={styles.iconSearch} />
      <input
        className={styles.inputSearch}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
