import styles from "./Textarea.module.css";

function Textarea({
  children,
  name,
  id,
  defaultValue,
  value,
  onChange,
  cols,
  rows,
  className,
  required,
  placeholder,
}) {
  return (
    <textarea
      name={name}
      id={id}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      cols={cols}
      rows={rows}
      className={`${styles.customTextArea} ${className}`}
      required={required}
      placeholder={placeholder}
    >
      {children}
    </textarea>
  );
}

export default Textarea;
