import styles from "./Input.module.css";

function Input({
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  required,
  className,
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${styles.customInput} ${className}`}
    />
  );
}

export default Input;
