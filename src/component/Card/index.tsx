import styles from "./styles.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <a className={styles.imageContainer}>
        <img className={styles.viewIcon} src="icon-view.svg" alt="View" />
        <img
          className={styles.nftImage}
          src="image-equilibrium.jpg"
          alt="Equilbrium"
        />
      </a>
      <h1>
        <a href="#">Equilibrium #3429</a>
      </h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className={styles.details}>
        <span className={styles.price}>
          <img src="icon-ethereum.svg" alt="Ethereum" />
          0.041 ETH
        </span>
        <span className={styles.timeleft}>
          <img src="icon-clock.svg" alt="Clock" />3 days left
        </span>
      </div>
      <div className={styles.creator}>
        <img src="image-avatar.png" alt="Avatar" />
        Creation of <a href="#">Jules Wyvern</a>
      </div>
    </div>
  );
}
