import { Button } from "../components/ui/button";
import Count from "../components/Count";

const Counter2 = ({
  count: count,
  onIncrement,
  onDecrement,
}: {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md w-fit">
      <Button onClick={onDecrement} className="px-4 py-2 bg-red-500 text-lg">
        –
      </Button>

      <Count count={count} />

      <Button onClick={onIncrement} className="px-4 bg-blue-500 py-2 text-lg">
        +
      </Button>
    </div>
  );
};

export default Counter2;
