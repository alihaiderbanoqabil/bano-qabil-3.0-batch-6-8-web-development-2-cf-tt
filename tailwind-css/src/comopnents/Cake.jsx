import React from "react";
import { useSelector } from "react-redux";

const Cake = () => {
  const state = useSelector((state) => state);
  console.log("state", state);

  return <div>Total number of cakes in bakery :{state.cake.numberOfCakes}</div>;
};

export default Cake;
