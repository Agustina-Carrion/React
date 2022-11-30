import MenuItem from "./MenuItem";
import { Link } from "wouter";
import styles from "../styles/Sidebar.module.css";

function Sidebar({ menu }) {
  return (
    <aside className={styles.container}>
      <ul>
        {menu.map((menuItem, index) => (
          <Link key={index} href={menuItem.target}>
            <MenuItem
              key={menuItem.text}
              text={menuItem.text}
              target={menuItem.target}
              count={menuItem.count}
            />
          </Link>
        ))}
      </ul>
    </aside>
  );
}
export default Sidebar;
