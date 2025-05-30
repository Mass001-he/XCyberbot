import Card from "../demoCard";
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

export default function Demo() {
  return (
    <div className={styles.demo}>
      <div className={styles.demoWrapper}>
        <div className={styles.title}>案例</div>
        <div className={styles.description}>
          与超过300位合作伙伴一道，迎对企业转型与消费升级发现新机会
        </div>

        <div className={styles.cardBox}>
          {data.map((item, index) => (
            <Card key={index} data={item} size={380} />
          ))}
        </div>
        <div className={styles.more}>
          <div>
            <div className={styles.moreTitle}>全部案例</div>
            <div className={styles.moreDescription}>
              全面了解XCyberbot的商业合作案例，帮助您做出正确的选择
            </div>
          </div>
          <div className={styles.moreButton}>#点击了解全部案例</div>
        </div>
      </div>
    </div>
  );
}
