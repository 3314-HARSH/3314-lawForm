import styles from "./Gallery.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/imglaw2.png";
import img3 from "../../assets/imglaw3.png";
import img4 from "../../assets/imglaw4.png";
import img5 from "../../assets/imglaw5.png";
import img6 from "../../assets/imglaw6.png";
function Gallery() {
  return (
    <div className={styles.Gallery}>
      <h1 className={styles.Gallery__headingText}> Area of Practices</h1>
      <div className={styles.Gallery__collage}>
        <div
          className={`${styles.Gallery__imgWrapper} ${styles.Gallery__item1}`}
        >
          <img src={img1} alt="img 1" className={styles.Gallery__img} />
          <span className={styles.Gallery__text}>Business law</span>
        </div>

        <div
          className={`${styles.Gallery__imgWrapper} ${styles.Gallery__item2}`}
        >
          <img src={img2} alt="img 2" className={styles.Gallery__img} />
          <span className={styles.Gallery__text}>Partnership law</span>
        </div>

        <div
          className={`${styles.Gallery__imgWrapper} ${styles.Gallery__item3}`}
        >
          <img src={img3} alt="img 3" className={styles.Gallery__img} />
          <span className={styles.Gallery__text}>Real estate law</span>
        </div>

        <div
          className={`${styles.Gallery__imgWrapper} ${styles.Gallery__item4}`}
        >
          <img src={img4} alt="img 4" className={styles.Gallery__img} />
          <span className={styles.Gallery__text}>Business law</span>
        </div>

        <div
          className={`${styles.Gallery__imgWrapper} ${styles.Gallery__item5}`}
        >
          <img src={img5} alt="img 5" className={styles.Gallery__img} />
          <span className={styles.Gallery__text}>Landload disputes</span>
        </div>

        <div
          className={`${styles.Gallery__imgWrapper} ${styles.Gallery__item6}`}
        >
          <img src={img6} alt="img 6" className={styles.Gallery__img} />
          <span className={styles.Gallery__text}>elder abuse</span>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
