import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Global State (Redux)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        -
      </button>
    </div>
  );
}

export default ReduxCounter;