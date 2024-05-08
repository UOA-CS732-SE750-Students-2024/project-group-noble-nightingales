import styles from './CSS/ThumbnailSkeleton.module.css';

const ThumbnailSkeleton = () => {
  return (
    <div className={`${styles.card} ${styles.cardSkeleton}`}>
      <div className={styles.cardTitle}></div>
      <div className={styles.cardDescription}></div>
    </div>
  );
};

export default ThumbnailSkeleton;
