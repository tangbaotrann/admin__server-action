"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../menuLink/menuLink.module.css";

function MenuLink({ _subItem }) {
  const pathName = usePathname();

  return (
    <Link
      href={_subItem.path}
      className={`${styles.container} ${
        pathName === _subItem.path && styles.active
      }`}
    >
      {_subItem.icon} {_subItem.title}
    </Link>
  );
}

export default MenuLink;
