import styles from "./CSS/LoadingAnimation.module.css"
const LoadingAnimation = () => {

    return (
        <div><div className={styles.overlay} id="overlay"></div>
                <div className={styles.loader}>
                    <div className={styles.loaderCube}>
                    <div className={styles.face}></div>
                    <div className={styles.face}></div>
                    <div className={styles.face}></div>
                    <div className={styles.face}></div>
                    <div className={styles.face}></div>
                    <div className={styles.face}></div>
                </div>
            </div>
        </div>
            
    )
}

export default LoadingAnimation;