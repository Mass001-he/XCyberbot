import Card from "../customerCard";
import styles from "./index.module.less";
import Logo_aeg_nor from "../../../../assets/home/customer/logo_aeg_nor@2x.png";
import Logo_aeg_sel from "../../../../assets/home/customer/logo_aeg_sel@2x.png";
import Logo_ball_sel from "../../../../assets/home/customer/logo_ball_sel@2x.png";
import Logo_ball_nor from "../../../../assets/home/customer/logo_ball_nor@2x.png";
import Logo_btv_nor from "../../../../assets/home/customer/logo_btv_nor@2x.png";
import Logo_btv_sel from "../../../../assets/home/customer/logo_btv_sel@2x.png";
import Logo_disney_nor from "../../../../assets/home/customer/logo_disney_nor@2x.png";
import Logo_disney_sel from "../../../../assets/home/customer/logo_disney_sel@2x.png";
import Logo_idg_nor from "../../../../assets/home/customer/logo_idg_nor@2x.png";
import Logo_idg_sel from "../../../../assets/home/customer/logo_idg_sel@2x.png";
import Logo_impossible_nor from "../../../../assets/home/customer/logo_impossible_nor@2x.png";
import Logo_impossible_sel from "../../../../assets/home/customer/logo_impossible_sel@2x.png";
import Logo_intel_nor from "../../../../assets/home/customer/logo_intel_nor@2x.png";
import Logo_intel_sel from "../../../../assets/home/customer/logo_intel_sel@2x.png";
import Logo_poly_nor from "../../../../assets/home/customer/logo_poly_nor@2x.png";
import Logo_poly_sel from "../../../../assets/home/customer/logo_poly_sel@2x.png";
import Logo_sina_nor from "../../../../assets/home/customer/logo_sina_nor@2x.png";
import Logo_sina_sel from "../../../../assets/home/customer/logo_sina_sel@2x.png";
import Logo_vogue_nor from "../../../../assets/home/customer/logo_vogue_nor@2x.png";
import Logo_vogue_sel from "../../../../assets/home/customer/logo_vogue_sel@2x.png";

const data = [
  {
    id: "1",
    defaultImg: Logo_aeg_nor,
    hoverImg: Logo_aeg_sel,
    link: "",
  },
  {
    id: "2",
    defaultImg: Logo_ball_nor,
    hoverImg: Logo_ball_sel,
    link: "",
  },
  {
    id: "3",
    defaultImg: Logo_btv_nor,
    hoverImg: Logo_btv_sel,
    link: "",
  },
  {
    id: "4",
    defaultImg: Logo_disney_nor,
    hoverImg: Logo_disney_sel,
    link: "",
  },
  {
    id: "5",
    defaultImg: Logo_idg_nor,
    hoverImg: Logo_idg_sel,
    link: "",
  },
  {
    id: "6",
    defaultImg: Logo_impossible_nor,
    hoverImg: Logo_impossible_sel,
    link: "",
  },
  {
    id: "7",
    defaultImg: Logo_intel_nor,
    hoverImg: Logo_intel_sel,
    link: "",
  },
  {
    id: "8",
    defaultImg: Logo_poly_nor,
    hoverImg: Logo_poly_sel,
    link: "",
  },
  {
    id: "9",
    defaultImg: Logo_sina_nor,
    hoverImg: Logo_sina_sel,
    link: "",
  },
  {
    id: "10",
    defaultImg: Logo_vogue_nor,
    hoverImg: Logo_vogue_sel,
    link: "",
  },
];

export default function Customer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.title}>客户</div>
        <div className={styles.description}>
          从初创公司到世界500强，我们与世界范围的客户一起工作，与追求极致的伙伴探索并创造潜在的价值
        </div>

        <div className={styles.cardBox}>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
