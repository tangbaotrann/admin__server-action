import styles from "./Textarea.module.css";

function Textarea({
  children,
  name,
  id,
  value,
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
      value={value}
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
