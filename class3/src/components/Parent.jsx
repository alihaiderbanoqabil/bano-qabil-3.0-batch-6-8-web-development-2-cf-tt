import React, { createContext, useState } from "react";
import Child from "./Child";
import Child1 from "./Child1";
import { Todos } from "./Todos";

// const NameContext = createContext();
// const { Provider, Consumer } = NameContext;

// const Parent = () => {
//   const [name, setName] = useState("Ali");
//   console.log(name, "name");
//   return (
//     <Provider value={name}>
//       <Child1 name={name} />
//     </Provider>
//   );
// };

export const NameContext = createContext();

const Parent = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  console.log(name, "parent calling");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <Child1 name={name} />
    </>
  );
};

export default Parent;
// export const NameContext = createContext();

// const Parent = () => {
//   const [name, setName] = useState("Ali");
//   console.log(name, "name");
//   return (
//     <NameContext.Provider value={{ name: name, setName }}>
//       <Child1 />
//       {/* <Todos /> */}
//     </NameContext.Provider>
//   );
// };

// export default Parent;

// const Parent = () => {
//   const [dataFromChild, setDataFromChild] = useState("");
//   function handleDataFromChild(dataFromChild) {
//     console.log({ dataFromChild });
//     setDataFromChild(dataFromChild);
//   }

//   return (
//     <div>
//       <h1>Data from Child: {dataFromChild}</h1>
//       <Child sendDataToParent={handleDataFromChild} />
//     </div>
//   );
// };

// export default Parent;

// const Parent = () => {
//   const data = "some data";
//   return (
//     <div>
//       Parent
//       <Child data={data} />
//     </div>
//   );
// };

// export default Parent;
