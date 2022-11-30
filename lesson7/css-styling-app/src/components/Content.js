import styles from "../styles/Content.module.css";
function Content({ children }) {
  return (
    <article className={styles.container}>
      <div>{children}</div>
    </article>
  );
}

export default Content;
