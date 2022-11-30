import MessageIcon from "./MessageIcon";
import styles from "../styles/TopBar.module.css";

function TopBar({ title, msgCounter }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <MessageIcon msgCounter={msgCounter} />
    </header>
  );
}

export default TopBar;
