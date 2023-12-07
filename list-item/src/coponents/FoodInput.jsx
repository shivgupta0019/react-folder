import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.inPut}
      onKeyDown={handleKeyDown}
      placeholder="Enter Food Items here"
    />
  );
};

export default FoodInput;
