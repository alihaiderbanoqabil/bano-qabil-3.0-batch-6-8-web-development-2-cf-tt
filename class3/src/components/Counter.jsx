import React, { useEffect, useState } from "react";

const Counter = () => {
  //   const count = useState(0);
  const [count, setCount] = useState(0);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect calling");
    // cleanup function
    return () => {
      console.log("This code will run when component unmont");
    };
  }, []);

  console.log("Counter component calling");
  // const increment = () => {
  //   setCount(count + 1);
  //   console.log("increment", count);
  // };
  // const decrement = () => {
  //   // setCount(count - 1);
  //   setCount((previousCount) => {
  //     return previousCount - 1;
  //   });
  //   console.log("decrement", count);
  // };
  //   let count = 0;
  //   const increment = () => {
  //     // count++;
  //     count = count + 1;
  //     console.log("increment", count);
  //   };
  //   const decrement = () => {
  //     count--;
  //     console.log("decrement", count);
  //   };
  // console.log({ isPasswordVisible });

  return (
    <div>
      {/* <button onClick={increment}>+</button>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement()}>-</button> */}
      {/* <button onClick={() => setIsPasswordVisible(true)}>Show</button> */}
      <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
        {/* {!isPasswordVisible ? "Show" : "Hide"} */}
        {isPasswordVisible ? "Hide" : "Show"}
      </button>
      {/* <input type="password" /> */}
      <input type={isPasswordVisible ? "text" : "password"} />
    </div>
  );
};

export default Counter;
