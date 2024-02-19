import styles from "./AddProducts.module.css";
import Input from "@/app/components/Input/Input";
import Select from "@/app/components/Select/Select";
import Textarea from "@/app/components/Textarea/Textarea";
import Form from "@/app/components/Form/Form";
import Option from "@/app/components/Option/Option";

function AddProducts() {
  return (
    <div className={styles.container}>
      <Form action="" className="">
        <Input placeholder="Enter title..." />
        <Select>
          <Option>1</Option>
          <Option>12</Option>
        </Select>
        <Textarea
          cols={30}
          rows={16}
          placeholder="Enter description"
        ></Textarea>
      </Form>
    </div>
  );
}

export default AddProducts;
