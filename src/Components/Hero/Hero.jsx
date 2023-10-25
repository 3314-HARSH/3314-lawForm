import styles from "./Hero.module.css";
import HeroImg from "../../assets/heroImg.png";
import MessageBox from "../../assets/Message 35.svg";
function Hero() {
  return (
    <>
      <div className={styles.hero__psudo}></div>
      <div className={styles.hero}>
        <div className={styles.hero__about}>
          <h1 className={styles.hero__tagline1}>you don't have to</h1>
          <h1 className={styles.hero__tagline2}>Fight then Alone</h1>
          <p className={styles.hero__text}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className={styles.hero__inputBox}>
            <img src={MessageBox} alt="hero" className={styles.hero__message} />
            <input
              type="email"
              className={styles.hero__input}
              placeholder="Enter your email"
            ></input>
          </div>
        </div>
        <div className={styles.hero__imgBox}>
          <img src={HeroImg} alt="hero" className={styles.hero__img} />
        </div>
      </div>
    </>
  );
}

export default Hero;
