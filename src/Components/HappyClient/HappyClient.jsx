import styles from "./HappyClient.module.css";
// import Slider from "react-slick";
import img1 from "../../assets/happyclient1.png";
import img2 from "../../assets/happyclient2.png";
import img3 from "../../assets/happyclient3.png";
import Card from "../Card/Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Clients = [
  { name: "Jane Cooper", img: img1, designation: "Ceo of Hunt" },
  { name: "Devon Lane", img: img2, designation: "Ceo of Hunt" },
  { name: "Robert Fox", img: img3, designation: "Ceo of Hunt" },
];
function HappyClient() {
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
  //       <FaArrowRight />
  //     </div>
  //   );
  // };
  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
  //       <FaArrowLeft />
  //     </div>
  //   );
  // };
  // const settings = {
  //   infinite: true,
  //   lazyLoad: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   centerMode: true,
  //   centerPadding: 0,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  // };

  return (
    <div className={styles.happyClient}>
      <div className={styles.happyClient__header}>
        <h1 className={styles.happyClient__headingText}>
          What says our happy Clients
        </h1>
        <div className={styles.happyClient__carouselBtn}>
          <button className={styles.happyClient__carouselBtnLeft}>
            <FaArrowLeft color="black" fontSize="1.5rem" />
          </button>
          <button className={styles.happyClient__carouselBtnRight}>
            <FaArrowRight color="black" fontSize="1.5rem" padding="1.5rem" />
          </button>
        </div>
      </div>
      <div className={styles.happyClient__carousel}>
        {Clients.map((client) => {
          return (
            <Card
              name={client.name}
              img={client.img}
              designation={client.designation}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HappyClient;
