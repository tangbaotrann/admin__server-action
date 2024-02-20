import styles from "./Form.module.css";

function Form({ children, title, action, className }) {
  return (
    <form title={title} action={action} className={className}>
      {children}
    </form>
  );
}

export default Form;
