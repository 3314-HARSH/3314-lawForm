import styles from "./Navbar.module.css";
import Logo from "../../assets/lowFirmLogo.svg";
function Navbar() {
  return (
    <>
      <div className={styles.navbar__psudo}></div>
      <div className={styles.navbar}>
        <img src={Logo} alt="logo" className={styles.navbar__logo} />
        <ul className={styles.navbar__items}>
          <li className={styles.navbar__item}> Home </li>
          <li className={styles.navbar__item}> Attorneys</li>
          <li className={styles.navbar__item}>Practice Areas</li>
          <li className={styles.navbar__item}>About us</li>
        </ul>
        <button className={styles.navbar__btn}>Contact Now</button>
      </div>
    </>
  );
}

export default Navbar;
