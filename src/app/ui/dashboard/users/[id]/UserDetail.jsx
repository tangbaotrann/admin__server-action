import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./UserDetail.module.css";
import Image from "@/app/components/Image/Image";
import Form from "@/app/components/Form/Form";
import Input from "@/app/components/Input/Input";
import Textarea from "@/app/components/Textarea/Textarea";
import Select from "@/app/components/Select/Select";
import Option from "@/app/components/Option/Option";
import Button from "@/app/components/Button/Button";

function UserDetail() {
  return (
    <div className={styles.container}>
      <Link href="/dashboard/users" className={styles.back}>
        <IoIosArrowBack /> Back to users
      </Link>

      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            src="/noavatar.png"
            alt="img-avt"
            className={styles.avatarImage}
          />
          <span className={styles.name}>Name...</span>
        </div>

        <div className={styles.inputs}>
          <Form action="" className={styles.form}>
            <Input
              type="text"
              name="username"
              placeholder="Enter username..."
            />
            <Input type="text" name="email" placeholder="Enter email..." />
            <Input
              type="text"
              name="password"
              placeholder="Enter password..."
            />
            <Input type="text" name="phone" placeholder="Enter phone..." />
            <Textarea
              name="address"
              placeholder="Enter address..."
              rows={4}
            ></Textarea>
            <Select name="isAdmin" placeholder="Choose a role...">
              <Option value="generate">Choose a role</Option>
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
            <Select name="status" placeholder="Choose a status...">
              <Option value="generate">Choose a status</Option>
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>

            <div>
              <Button type="submit" className={styles.btnUpdate}>
                Update
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
