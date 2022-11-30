import styles from "../styles/MenuItem.module.css";

function MenuItem({ text, onClick, count }) {
  return (
    <li className={styles.listItem}>
      <button onClick={onClick}>
        <span> {text} </span>
      </button>
      {count && <span> {count} </span>}
    </li>
  );
}

export default MenuItem;
