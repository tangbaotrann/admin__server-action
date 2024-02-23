"use client";

import styles from "./Login.module.css";
import Form from "@/app/components/Form/Form";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import { loginAuthenticate } from "@/app/utils/actions";
import { useState } from "react";

function Login() {
  const [err, setErr] = useState("");

  const handleLogin = async (formData) => {
    const res = await loginAuthenticate(formData);

    res && setErr(res);
  };

  return (
    <div className={styles.container}>
      <Form title="Login" action={handleLogin} className={styles.form}>
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

        <Button className={styles.btnLogin}>Login</Button>

        <span className={styles.error}>{err && err}</span>
      </Form>
    </div>
  );
}

export default Login;
