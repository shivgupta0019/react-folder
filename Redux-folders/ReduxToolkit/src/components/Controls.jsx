import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDicrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddButton = () => {
    dispatch(
      counterActions.add({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const handleSubButtion = () => {
    dispatch(
      counterActions.subtract({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const handlePrivacyButtion = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="y3i8x"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          fdprocessedid="g9bv93"
          onClick={handleDicrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          fdprocessedid="g9bv93"
          onClick={handlePrivacyButtion}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controle-row">
        <input
          type="text"
          ref={inputElement}
          placeholder="Enter Number"
          className="number-input"
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3"
          fdprocessedid="y3i8x"
          onClick={handleAddButton}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          fdprocessedid="g9bv93"
          onClick={handleSubButtion}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Controls;
