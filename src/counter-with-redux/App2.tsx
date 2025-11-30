import { useState } from "react";
import Counter from "../counter-withoud-redux/Counter";
import Stats from "../components/Stats";

const initialCounters = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];
function App2() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (id: number) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id: number) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count - 1,
        };
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const totalCount = counters.reduce(
    (total, counter) => total + counter.count,
    0
  );
  return (
    <div className="w-screen p-10">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application with redux
      </h1>

      <div className=" flex gap-10 justify-center items-center mx-auto mt-10">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.count}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </div>
      <div className="flex mt-5 items-center justify-center">
        <Stats totalCount={totalCount}></Stats>
      </div>
    </div>
  );
}

export default App2;
