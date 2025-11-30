import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialCounters = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
]
function App() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (id: number) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1
        }
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
          count: counter.count - 1
        }
      }
      return counter;
    });
    setCounters(newCounters);
  }

  const totalCount = counters.reduce((total, counter) => total + counter.count, 0);
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md flex flex-col items-center mx-auto mt-10 space-y-5">
        {
          counters.map((counter) => (
            <Counter
              key={counter.id}
              count={counter.count}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))
        }
        <Stats totalCount={totalCount}></Stats>
      </div>
    </div>
  );
}

export default App;
