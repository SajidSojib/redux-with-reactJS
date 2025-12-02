import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Stats2 = () => {
  const counters = useSelector((state: RootState) => state.counters);
  const count = counters.reduce((acc, counter) => acc + counter.count, 0);
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md w-fit">
      <span className="text-3xl font-semibold min-w-10 text-center">
        Total count: {count}
      </span>
    </div>
  );
};

export default Stats2;
