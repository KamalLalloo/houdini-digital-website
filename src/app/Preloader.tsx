import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderBar}></div>
    </div>
  );
};

export default Preloader;
