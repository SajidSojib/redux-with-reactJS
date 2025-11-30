import App from "./counter-withoud-redux/App";
import App2 from "./counter-with-redux/App2";

const Root = () => {
  return (
    <div className="bg-gray-100 text-slate-700 h-screen space-y-5">
      <App></App>
      <App2></App2>
    </div>
  );
};

export default Root;
