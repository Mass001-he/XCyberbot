import styles from "./index.module.less";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div>我们不是机构</div>
        <div>我们是您的伙伴。</div>
      </div>
    </div>
  );
}
