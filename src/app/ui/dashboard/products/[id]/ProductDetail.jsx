import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./ProductDetail.module.css";
import Image from "@/app/components/Image/Image";
import Button from "@/app/components/Button/Button";
import Option from "@/app/components/Option/Option";
import Select from "@/app/components/Select/Select";
import Textarea from "@/app/components/Textarea/Textarea";
import Input from "@/app/components/Input/Input";
import Form from "@/app/components/Form/Form";

function ProductDetail() {
  return (
    <div className={styles.container}>
      <Link href="/dashboard/products" className={styles.back}>
        <IoIosArrowBack /> Back to product
      </Link>

      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            src="/noproduct.jpg"
            alt="img-avt"
            className={styles.avatarImage}
          />
          <span className={styles.name}>Name...</span>
        </div>

        <div className={styles.inputs}>
          <Form action="" className={styles.form}>
            <Input type="text" name="title" placeholder="Enter title..." />
            <Select name="category" placeholder="Choose a category">
              <Option value="generate">Choose a category</Option>
              <Option value="kitchen">Kitchen</Option>
              <Option value="phone">Phone</Option>
              <Option value="computer">Computer</Option>
            </Select>
            <Input type="number" name="price" placeholder="Enter price..." />
            <Input type="number" name="stock" placeholder="Enter stock..." />
            <Input type="text" name="color" placeholder="Enter color..." />
            <Input type="text" name="size" placeholder="Enter size..." />
            <Textarea
              name="description"
              rows={4}
              placeholder="Enter description..."
            ></Textarea>

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

export default ProductDetail;
