import styles from "./Card.module.css";
function Card({ name, img, designation }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__imgWrapper}>
        <img src={img} alt="client img" className={styles.card__img} />
      </div>
      <h4 className={styles.card__name}>{name}</h4>
      <h5 className={styles.card__designation}>{designation}</h5>
      <p className={styles.card__text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
    </div>
  );
}

export default Card;
