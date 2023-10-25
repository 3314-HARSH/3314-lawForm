import styles from "./Team.module.css";
import img1 from "../../assets/team1.png";
import img2 from "../../assets/team2.png";
import img3 from "../../assets/team3.png";
import img4 from "../../assets/team4.png";
import img5 from "../../assets/team5.png";
import img6 from "../../assets/team6.png";
function Team() {
  return (
    <div className={styles.team}>
      <h1 className={styles.team__headingText}>Our Team</h1>
      <div className={styles.team__teamMates}>
        <div className={styles.team__teamMember}>
          <img src={img1} alt="member 1" className={styles.team__img} />
          <div className={styles.team__memberIntro}>
            <h3 className={styles.team__name}>Danial Def</h3>
            <span className={styles.team__cases}>301 Cases</span>
          </div>
        </div>
        <div className={`${styles.team__teamMember} ${styles.team__highCases}`}>
          <img src={img2} alt="member 2" className={styles.team__img} />
          <div className={styles.team__memberIntro}>
            <h3 className={styles.team__name}>Sanfole</h3>
            <span className={styles.team__cases}>853</span>
          </div>
        </div>
        <div className={styles.team__teamMember}>
          <img src={img3} alt="member 3" className={styles.team__img} />
          <div className={styles.team__memberIntro}>
            <h3 className={styles.team__name}>Cesforila</h3>
            <span className={styles.team__cases}>470 Cases</span>
          </div>
        </div>
        <div className={styles.team__teamMember}>
          <img src={img4} alt="member 4" className={styles.team__img} />
          <div className={styles.team__memberIntro}>
            <h3 className={styles.team__name}>Colleen</h3>
            <span className={styles.team__cases}>180 Cases</span>
          </div>
        </div>
        <div className={styles.team__teamMember}>
          <img src={img5} alt="member 5" className={styles.team__img} />
          <div className={styles.team__memberIntro}>
            <h3 className={styles.team__name}>Haldone</h3>
            <span className={styles.team__cases}>212 Cases</span>
          </div>
        </div>
        <div className={styles.team__teamMember}>
          <img src={img6} alt="member 6" className={styles.team__img} />
          <div className={styles.team__memberIntro}>
            <h3 className={styles.team__name}>Nik Jeo</h3>
            <span className={styles.team__cases}>480 Cases</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
