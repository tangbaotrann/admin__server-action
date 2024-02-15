"use client";

import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

function Navbar() {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <span className={styles.title}>{pathName.split("/").pop()}</span>

      <div className={styles.search}>
        <div className={styles.searchDetail}>
          <MdSearch size={18} className={styles.iconSearch} />
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Enter searching here..."
          />
        </div>

        <div className={styles.icons}>
          <MdOutlineChat className={styles.iconChat} size={20} />
          <MdNotifications className={styles.iconNotification} size={20} />
          <MdPublic className={styles.iconPublic} size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
