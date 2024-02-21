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
import { findByIdProduct } from "@/app/utils/actions";

async function ProductDetail({ params }) {
  const { id } = params;
  const product = await findByIdProduct(id);

  return (
    <div className={styles.container}>
      <Link href="/dashboard/products" className={styles.back}>
        <IoIosArrowBack /> Back to product
      </Link>

      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            src={product.image || "/noproduct.jpg"}
            alt="img-avt"
            className={styles.avatarImage}
          />
          <span className={styles.name}>{product.title}</span>
        </div>

        <div className={styles.inputs}>
          <Form action="" className={styles.form}>
            <Input
              type="text"
              name="title"
              value={product.title}
              placeholder="Enter title..."
            />
            <Select
              name="category"
              defaultValue={product.category}
              placeholder="Choose a category"
            >
              <Option value="generate">Choose a category</Option>
              <Option value="Kitchen">Kitchen</Option>
              <Option value="Phone">Phone</Option>
              <Option value="Computer">Computer</Option>
              <Option value="Android">Android</Option>
              <Option value="IOS">IOS</Option>
            </Select>
            <Input
              type="number"
              name="price"
              value={product.price}
              placeholder="Enter price..."
            />
            <Input
              type="number"
              name="stock"
              value={product.stock}
              placeholder="Enter stock..."
            />
            <Input
              type="text"
              name="color"
              value={product.color}
              placeholder="Enter color..."
            />
            <Input
              type="text"
              name="size"
              value={product.size}
              placeholder="Enter size..."
            />
            <Textarea
              name="description"
              value={product.desc}
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
