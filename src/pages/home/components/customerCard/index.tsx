import { useRef } from "react";
import { Link } from "react-router";
import { useHover } from "ahooks";
import styles from "./index.module.less";

type Props = {
  data: {
    id: string;
    defaultImg: string;
    hoverImg: string;
    link?: string;
  };
};

export default function Card({ data: { defaultImg, hoverImg, link } }: Props) {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  return (
    <div ref={ref} className={styles.container}>
      <Link to={link ?? "/"}>
        <img src={isHovering ? hoverImg : defaultImg} alt="" />
      </Link>
    </div>
  );
}
