import styles from "./Login.module.css";

import Form from "@/app/components/Form/Form";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";

function Login() {
  return (
    <div className={styles.container}>
      <Form title="Login" action="" className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <Input
          type="text"
          name="username"
          placeholder="Enter your username..."
        />
        <Input
          type="text"
          name="password"
          placeholder="Enter your password..."
        />

        <Button type="submit" className={styles.btnLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
