import styles from "./Feature.module.css";
import Gift from "../../assets/Gift 1.svg";
function Feature() {
  return (
    <div className={styles.feature}>
      <h1 className={styles.feature__headingText}>Why Choose us?</h1>
      <div className={styles.feature__cardBox}>
        <div className={styles.feature__card}>
          <div className={styles.feature__imgWrapper}>
            <img src={Gift} alt="card 1" className={styles.feature__img} />
          </div>
          <h4 className={styles.feature__success}>98% Success Rate</h4>
          <p className={styles.feature__text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.feature__btn}>Read more</button>
        </div>
        <div className={styles.feature__card}>
          <div className={styles.feature__imgWrapper}>
            <img src={Gift} alt="card 2" className={styles.feature__img} />
          </div>
          <h4 className={styles.feature__success}>100% Success Rate</h4>
          <p className={styles.feature__text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.feature__btn}>Read more</button>
        </div>
        <div className={styles.feature__card}>
          <div className={styles.feature__imgWrapper}>
            <img src={Gift} alt="card 3" className={styles.feature__img} />
          </div>
          <h4 className={styles.feature__success}>100% Success Rate</h4>
          <p className={styles.feature__text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.feature__btn}>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
