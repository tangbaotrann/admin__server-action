import styles from "./Input.module.css";

function Input({
  type,
  name,
  id,
  defaultValue,
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
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${styles.customInput} ${className}`}
    />
  );
}

export default Input;
