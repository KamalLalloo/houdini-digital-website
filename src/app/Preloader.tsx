import styles from "./Preloader.module.css";

const Preloader = ({ fadeOut }: { fadeOut: boolean }) => {
  return (
    <div className={`${styles.loaderWrapper} ${fadeOut ? styles.hidden : ""}`}>
      <div className={styles.loaderBar}></div>
    </div>
  );
};

export default Preloader;
