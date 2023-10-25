import styles from "./Intro.module.css";
function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.intro__main}>
        Let’s Introduce <br /> Ourself
      </h1>
      <div className={styles.intro__sub}>
        <h3 className={styles.intro__mainPara}>Criminal Lawyer</h3>
        <p className={styles.intro__para}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Intro;
