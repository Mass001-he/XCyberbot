import styles from "./index.module.less";

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
    </div>
  );
}
