import styles from "./InputButtion.module.css";

let InputButtion = ({ handleInputBution }) => {
  let array = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  let i = 1;
  return (
    <div className={`${styles.conTainer} container`}>
      <div className={`${styles.InPutButtion} `}>
        <div className={`${styles.buttons} `}>
          {array.map((item) => (
            <button
              key={i++}
              type="button"
              onClick={handleInputBution}
              className={`${styles.buttonStyle} btn btn-light border border-secondary`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InputButtion;
