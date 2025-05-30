import styles from "./index.module.less";
import EnterpriseBackward from "../../../../assets/home/service/enterprise-backward.gif";
import EnterpriseForward from "../../../../assets/home/service/enterprise-forward.gif";
import DesignBackward from "../../../../assets/home/service/design-backward.gif";
import DesignForward from "../../../../assets/home/service/design-forward.gif";
import EcomBackward from "../../../../assets/home/service/ecom-backward.gif";
import EcomForward from "../../../../assets/home/service/ecom-forward.gif";
import TechnologyBackward from "../../../../assets/home/service/technology-backward.gif";
import TechnologyForward from "../../../../assets/home/service/technology-forward.gif";
import ServiceCard from "../serviceCard";

const data = [
  {
    title: "企业数字化咨询",
    description: "企业数字化转型布局 用户研究 / 市场分析 / 行业模型 / 渠道策略",
    defaultImg: EnterpriseBackward,
    hoverImg: EnterpriseForward,
    id: "1",
  },
  {
    title: "设计服务呈现",
    description:
      "信息识别系统 / 信息架构设计 / 交互原型设计 / 用户界面设计 / 用户体验设计 / 视觉创意设计",
    defaultImg: DesignBackward,
    hoverImg: DesignForward,
    id: "2",
  },
  {
    title: "技术开发支持",
    description:
      "网站开发 / 移动端应用开发 / 小程序开发 / 人工智能 / VR技术开发 / IOT互联网技术开发",
    defaultImg: EcomBackward,
    hoverImg: EcomForward,
    id: "3",
  },
  {
    title: "新电商解决方案",
    description: "电商运营策略 / 电商解决方案 / ERP解决方案 / 移动策略",
    defaultImg: TechnologyBackward,
    hoverImg: TechnologyForward,
    id: "4",
  },
];

export default function Service() {
  return (
    <div className={styles.service}>
      <div className={styles.serviceWrapper}>
        <div className={styles.title}>服务</div>
        <div className={styles.description}>
          聚焦用户体验旅程，全局化流程体验服务，助力每个商业伙伴达成商业梦想
        </div>

        <div className={styles.cardBox}>
          {data.map((item, index) => (
            <ServiceCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
