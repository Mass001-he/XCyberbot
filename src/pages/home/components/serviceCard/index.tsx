import { useState } from "react";
import styles from "./index.module.less";

interface Prop {
  data: {
    title: string;
    description: string;
    defaultImg: string;
    hoverImg: string;
    id: string;
  };
}

export default function ServiceCard({ data }: Prop) {
  // 鼠标移入时显示hoverImg，移出时显示defaultImg
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img src={isHover ? data.hoverImg : data.defaultImg} alt={data.title} />
      <div className={styles.cardText}>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={styles.cardDescription}>{data.description}</div>
      </div>
    </div>
  );
}
