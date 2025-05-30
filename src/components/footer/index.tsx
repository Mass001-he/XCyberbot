import styles from "./index.module.less";
import { Link } from "react-router";
import classNames from "classnames";
import Logo from "../../assets/common/logo_footer.png";
import LogoPng from "../../assets/common/logo_footer_img.png";

const demo = [
  { path: "/", name: "电子商务" },
  { path: "/", name: "新媒体" },
  { path: "/", name: "视频" },
  { path: "/", name: "家装" },
  { path: "/", name: "体育" },
  { path: "/", name: "新农业" },
  { path: "/", name: "智能小区" },
  { path: "/", name: "新零售" },
  { path: "/", name: "智能硬件" },
];

const product = [
  { path: "/", name: "EC 小程序" },
  { path: "/", name: "EC Native" },
  { path: "/", name: "EC Mobile" },
  { path: "/", name: "EC Mall" },
  { path: "/", name: "O2O Mobile" },
];

const aboutUs = [
  { path: "/", name: "关于我们" },
  { path: "/", name: "加入我们" },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div
            className={classNames(styles.footerColumn, styles.footerColumnLeft)}
          >
            <div className={styles.footerSection}>
              <div className={styles.footerTitle}>案例</div>
              <div className={styles.footerLinks}>
                {demo.map((item, index) => (
                  <Link key={index} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.footerSection}>
              <div className={styles.footerTitle}>产品</div>
              <div className={styles.footerLinks}>
                {product.map((item, index) => (
                  <Link key={index} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.footerSection}>
              <div className={styles.footerTitle}>关于我们</div>
              <div className={styles.footerLinks}>
                {aboutUs.map((item, index) => (
                  <Link key={index} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div
            className={classNames(
              styles.footerColumn,
              styles.footerColumnRight
            )}
          >
            <div className={styles.footerSection}>
              <div className={styles.footerLabel}>邮箱地址</div>
              <div>zjf@cdxfuture.com</div>
            </div>
            <div className={styles.footerSection}>
              <div className={styles.footerLabel}>联系电话</div>
              <div>+86-17394930048</div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <div className={styles.footerImg}>
              <img src={Logo} alt="" />
            </div>
            <div className={styles.footerText}>
              XCyberbot®and
              <div className={styles.footerImgLogo}>
                <img src={LogoPng} alt="" />
              </div>
              ®成都未知未来科技有限公司
            </div>
          </div>
          <div className={styles.footerBottomLinks}>
            <Link to="/">Copyright © 2025 XCyberbot</Link>
            <span> | </span>
            <Link to="/">中文</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
