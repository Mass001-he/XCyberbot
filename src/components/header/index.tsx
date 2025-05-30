import styles from "./index.module.less";
import { routes } from "../../router";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logo}></div>
        <nav>
          <ul className={styles.navList}>
            {routes[0].children.map((route) => (
              <li
                key={route.path}
                className={styles.navItem}
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
