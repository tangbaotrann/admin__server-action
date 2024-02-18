import styles from "@/app/ui/dashboard/rightbar/Rightbar.module.css";
import Image from "../Image/Image";

function BoxRightItem({
  optionImage,
  icon,
  textIcon,
  title,
  subtitle,
  desc,
  iconButton,
  textButton,
}) {
  return (
    <div className={styles.rightbar}>
      <div className={styles.main}>
        <div className={styles.bgImage}>
          {optionImage ? (
            <Image src={optionImage} alt="img-right" className={styles.image} />
          ) : null}
        </div>

        <div className={styles.title}>
          <span>{icon}</span>
          <span className={styles.textIcon}>{textIcon}</span>
        </div>

        <div className={styles.texts}>
          <span className={styles.note}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
          <span className={styles.desc}>{desc}</span>

          <div>
            <button className={styles.btnWatch}>
              {iconButton} {textButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxRightItem;
