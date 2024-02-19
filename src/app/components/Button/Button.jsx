import styles from "./Button.module.css";

function Button({ children, className, type, onClick, disabled }) {
  return (
    <button
      className={`${styles.customBtn} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
