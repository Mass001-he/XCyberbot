import styles from "./index.module.less";
import ContactImg from "../../../../assets/home/contact/img_contact@2x.png";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.left}>
          <img src={ContactImg} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <div>联系我们取得更多资讯，我们的工作人员</div>
            <div>
              会在24小时内与您联系。或者直接拨打我们的电话获取更多了解。
            </div>
            <div className={styles.tel}>+86-17394930048</div>
          </div>
          <div>联系我们</div>
        </div>
      </div>
    </div>
  );
}
