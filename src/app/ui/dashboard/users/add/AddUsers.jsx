import Link from "next/link";

import styles from "./AddUsers.module.css";
import { IoIosArrowBack } from "react-icons/io";
import Form from "@/app/components/Form/Form";
import Input from "@/app/components/Input/Input";
import Select from "@/app/components/Select/Select";
import Option from "@/app/components/Option/Option";
import Textarea from "@/app/components/Textarea/Textarea";
import Button from "@/app/components/Button/Button";

function AddUsers() {
  return (
    <div className={styles.container}>
      <Link href="/dashboard/users" className={styles.back}>
        <IoIosArrowBack /> Back to users
      </Link>

      <Form action="" className={styles.form}>
        <div className={styles.row}>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username..."
          />
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email..."
          />
          <Input
            type="text"
            id="password"
            name="password"
            placeholder="Enter password..."
          />
        </div>

        <div className={styles.row}>
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter phone..."
          />
          <Select id="role" name="role" placeholder="Choose a role...">
            <Option value="isAdmin">Is Admin?</Option>
            <Option value="isUser">Is User?</Option>
          </Select>
          <Select id="role" name="role" placeholder="Choose a status">
            <Option value="isActive">Is Active?</Option>
          </Select>
        </div>

        <Textarea
          name="address"
          id="address"
          cols={30}
          rows={16}
          placeholder="Enter address..."
        ></Textarea>

        <div>
          <Button type="submit" className={styles.btnAddHere}>
            Add here
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddUsers;
