import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./AddProducts.module.css";
import Input from "@/app/components/Input/Input";
import Select from "@/app/components/Select/Select";
import Textarea from "@/app/components/Textarea/Textarea";
import Form from "@/app/components/Form/Form";
import Option from "@/app/components/Option/Option";
import Button from "@/app/components/Button/Button";

function AddProducts() {
  return (
    <div className={styles.container}>
      <Link href="/dashboard/products" className={styles.back}>
        <IoIosArrowBack /> Back to products
      </Link>

      <Form action="" className={styles.form}>
        <div className={styles.row}>
          <Input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Enter title..."
          />
          <Select name="category" className={styles.select}>
            <Option value="general" selected>
              Choose a category
            </Option>
            <Option value="kitchen">Kitchen</Option>
            <Option value="phone">Phone</Option>
            <Option value="computer">Computer</Option>
          </Select>
          <Input
            className={styles.input}
            type="number"
            name="price"
            placeholder="Enter price..."
          />
        </div>

        <div className={styles.row}>
          <Input
            className={styles.input}
            type="number"
            name="stock"
            placeholder="Enter stock..."
          />
          <Input
            className={styles.input}
            type="text"
            name="color"
            placeholder="Enter color..."
          />
          <Input
            className={styles.input}
            type="text"
            name="size"
            placeholder="Enter size..."
          />
        </div>

        <Textarea
          cols={30}
          rows={16}
          name="description"
          placeholder="Enter description..."
        ></Textarea>

        <div>
          <Button type="submit" className={styles.btnSubmit}>
            Add here
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddProducts;
