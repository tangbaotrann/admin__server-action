import styles from "./Form.module.css";

function Form({ children, action, className }) {
  return (
    <form action={action} className={className}>
      {children}
    </form>
  );
}

export default Form;
