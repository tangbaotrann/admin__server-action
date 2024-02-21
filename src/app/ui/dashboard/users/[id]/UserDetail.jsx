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
import { findByIdUser } from "@/app/utils/actions";

async function UserDetail({ params }) {
  const { id } = params;
  const user = await findByIdUser(id);

  return (
    <div className={styles.container}>
      <Link href="/dashboard/users" className={styles.back}>
        <IoIosArrowBack /> Back to users
      </Link>

      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            src={user.image || "/noavatar.png"}
            alt="img-avt"
            className={styles.avatarImage}
          />
          <span className={styles.name}>{user.username}</span>
        </div>

        <div className={styles.inputs}>
          <Form action="" className={styles.form}>
            <Input
              type="text"
              name="username"
              value={user.username}
              placeholder="Enter username..."
            />
            <Input
              type="text"
              name="email"
              value={user.email}
              placeholder="Enter email..."
            />
            <Input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter password..."
            />
            <Input
              type="text"
              name="phone"
              value={user.phone}
              placeholder="Enter phone..."
            />
            <Textarea
              name="address"
              value={user.address}
              placeholder="Enter address..."
              rows={4}
            ></Textarea>
            <Select
              defaultValue={user.role}
              name="isAdmin"
              placeholder="Choose a role..."
            >
              <Option value="generate">Choose a role</Option>
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
            <Select
              defaultValue={user.status}
              name="status"
              placeholder="Choose a status..."
            >
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
