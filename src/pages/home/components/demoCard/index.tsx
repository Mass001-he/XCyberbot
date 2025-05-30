import styles from "./index.module.less";
import ArrowImg from "../../../../assets/home/demo/arrow_white.png";

type Props = {
  data: {
    title: string;
    description: string;
    category: string[];
    img: string;
    id: string;
  };
  size?: number;
};

export default function Card({ data, size }: Props) {
  return (
    <div className={styles.card} style={{ width: size }}>
      <div className={styles.cardImg}>
        <img src={data.img} alt={data.title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={styles.cardDescription}>{data.description}</div>
      </div>
      <div className={styles.cardContentHover}>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={styles.cardDescription}>{data.description}</div>
        <div className={styles.cardFooter}>
          <div className={styles.cardCategory}>{data.category.join("  ")}</div>
          <div className={styles.action}>
            <img src={ArrowImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
