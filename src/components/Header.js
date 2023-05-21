import styles from "./Header.module.css";

export default function ({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title} onClick={onClick}>
        Docs
      </p>
    </div>
  );
}
