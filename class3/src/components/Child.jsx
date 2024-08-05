import React, { useState } from "react";

// const Child = ({ data }) => {
//   return <div>Child {data}</div>;
// };

// export default Child;

const Child = ({ sendDataToParent }) => {
  const [data, setData] = useState("");

  function handleClick() {
    sendDataToParent(data);
  }

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
          sendDataToParent(e.target.value);
        }}
      />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
};

export default Child;
