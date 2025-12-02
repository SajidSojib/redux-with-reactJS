import { useDispatch, useSelector } from "react-redux";
import Counter2 from "./Counter2";
import { decrement, increment, type Counter } from "@/redux/countersSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import Stats2 from "./Stats2";


function App2() {
  const counters:Counter[] = useSelector((state: RootState) => state.counters);
  const dispatch:AppDispatch = useDispatch();

  const handleIncrement = (id: number) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrement(id));
  };

  return (
    <div className="w-screen p-10">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application with redux
      </h1>

      <div className=" flex gap-10 justify-center items-center mx-auto mt-10">
        {counters.map((counter: Counter) => (
          <Counter2
            key={counter.id}
            count={counter.count}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </div>
      <div className="flex mt-5 items-center justify-center">
        <Stats2></Stats2>
      </div>
    </div>
  );
}

export default App2;
