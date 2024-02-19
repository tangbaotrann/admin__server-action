import styles from "./Input.module.css";

function Input({ type, name, id, onChange, placeholder, required, className }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${styles.customInput} ${className}`}
    />
  );
}

export default Input;
