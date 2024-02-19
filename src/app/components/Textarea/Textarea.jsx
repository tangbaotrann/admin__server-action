import styles from "./Textarea.module.css";

function Textarea({
  children,
  name,
  id,
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
