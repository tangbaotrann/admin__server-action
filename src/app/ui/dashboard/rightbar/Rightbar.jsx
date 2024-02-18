import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

import styles from "./rightbar.module.css";
import BoxRightItem from "@/app/components/BoxRightItem/BoxRightItem";

function Rightbar() {
  return (
    <div className={styles.container}>
      <BoxRightItem
        optionImage="/astronaut.png"
        icon="🚀"
        textIcon="Available Now"
        title="How to use the version of the admin dashboard?"
        subtitle="Takes 4 minutes to learn"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        rem error adipisci atque dolores voluptates neque incidunt amet
        perferendis qui cupiditate possimus, omnis corporis itaque recusandae et
        hic illum est."
        iconButton={<MdPlayCircleFilled />}
        textButton="Watch"
      />
      <BoxRightItem
        optionImage={null}
        icon="💥"
        textIcon="Coming Soon"
        title="New server actions are available, partial pre-rendering is coming up!"
        subtitle="Boost your productivity"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        rem error adipisci atque dolores voluptates neque incidunt amet
        perferendis qui cupiditate possimus, omnis corporis itaque recusandae et
        hic illum est."
        iconButton={<MdReadMore />}
        textButton="Learn"
      />
    </div>
  );
}

export default Rightbar;
