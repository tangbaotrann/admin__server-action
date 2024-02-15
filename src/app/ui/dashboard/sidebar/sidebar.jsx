import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";

import styles from "../sidebar/sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "@/app/components/Image/Image";

const listMenu = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Helps",
        path: "/dashboard/helps",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.avatarImage}
          src="/noavatar.png"
          alt="img-avatar"
        />

        <div className={styles.userDetail}>
          <span className={styles.username}>baotrann</span>
          <span className={styles.userTitle}>administrator</span>
        </div>
      </div>

      <ul className={styles.menuItems}>
        {listMenu.map((_menu) => (
          <li key={_menu.title} className={styles.cat}>
            {_menu.title}

            {_menu.list.map((_subItem) => (
              <MenuLink key={_subItem.title} _subItem={_subItem} />
            ))}
          </li>
        ))}
      </ul>

      <button className={styles.logout}>
        <MdLogout /> Logout
      </button>
    </div>
  );
}

export default Sidebar;
