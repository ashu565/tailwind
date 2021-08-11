import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Context } from "../Components/Contexts/updateContext";

function hooks(props) {
  const data = useContext(Context);
  const { handleInc, handleDec, updateName } = data;
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="text-xl font-semibold text-gray-700">{data.name}</div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="border-2 border-green-500 outline-none rounded"
      />
      <div className="text-lg text-center">{data.value}</div>
      <button
        onClick={handleInc}
        className="bg-green-500 py-1 px-4 rounded-lg border-2 border-blue-400"
      >
        Increment
      </button>
      <button
        onClick={handleDec}
        className="bg-green-500 py-1 px-4 rounded-lg border-2 border-blue-400"
      >
        Decrement
      </button>
      <button
        onClick={() => {
          updateName(text);
          setText("");
        }}
        className="bg-green-500 py-1 px-4 rounded-lg border-2 border-blue-400"
      >
        Change Name
      </button>
    </div>
  );
}

hooks.propTypes = {};

export default hooks;
