import styles from "./Card.module.css";
import CardItem from "@/app/components/CardItem/CartItem";

function Card() {
  return (
    <div className={styles.cards}>
      <CardItem />
    </div>
  );
}

export default Card;
