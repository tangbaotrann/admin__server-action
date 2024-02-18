import styles from "../ui/dashboard/dashboard.module.css";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/Footer";

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.navbar}>
        <Navbar />

        {children}

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
