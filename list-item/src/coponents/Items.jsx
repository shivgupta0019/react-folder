import styles from "./Items.module.css";

const Items = ({ foodItems, bought, handleBuyButtion }) => {
  return (
    <li className={`${styles["kg-items"]} ${bought && styles["backGround"]}`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtion}
      >
        Buy
      </button>
    </li>
  );
};
export default Items;
