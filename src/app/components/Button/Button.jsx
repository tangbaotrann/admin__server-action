import styles from "./Button.module.css";

function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${styles.customBtn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
