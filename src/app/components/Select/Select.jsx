import styles from "./Select.module.css";

function Select({
  children,
  name,
  id,
  onChange,
  onSelect,
  placeholder,
  required,
  className,
}) {
  return (
    <select
      name={name}
      id={id}
      onChange={onChange}
      onSelect={onSelect}
      placeholder={placeholder}
      required={required}
      className={`${styles.customSelect} ${className}`}
    >
      {children}
    </select>
  );
}

export default Select;
