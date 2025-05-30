import Card from "../viewpointCard";
import styles from "./index.module.less";
import Image1 from "../../../../assets/home/demo/img1.jpg";
import Image2 from "../../../../assets/home/demo/img2.jpg";

const data = [
  {
    title: "中俄头条-懂中俄，更懂你",
    description: "中俄双语移动融媒体平台",
    category: ["双语", "媒体"],
    img: Image1,
    id: "1",
  },
  {
    title: "北京新工体-智慧工体",
    description: "智慧系统，让观赛体验更多元",
    category: ["体育", "移动"],
    img: Image2,
    id: "2",
  },
];

export default function Viewpoint() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.title}>观点</div>
        <div className={styles.description}>
          观察用户和研究用户的需求面，找到并提炼出观点，让更多人知道来帮助解决用户的需求点。
        </div>

        <div className={styles.cardBox}>
          {data.map((item, index) => (
            <Card key={index} data={item} size={380} />
          ))}
        </div>
      </div>
    </div>
  );
}
