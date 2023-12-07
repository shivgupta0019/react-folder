import styles from "./DisplayOutput.module.css";

function DisplayOutput({ outputDisplay }) {
  return (
    <div className={`${styles.results} container`}>
      <input type="text" value={outputDisplay} readOnly />
    </div>
  );
}
export default DisplayOutput;
