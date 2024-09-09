import React, { useEffect, useState } from "react";
import Cake from "./comopnents/Cake";
import { useDispatch } from "react-redux";
import {
  order1Cake,
  orderSpecificNumberOfCakes,
  restockSpecificNumberOfCakes,
} from "./store/features/cakeSlice";
import { fetchTodos } from "./store/features/todosSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const [numberOfCakes, setNumberOfCakes] = useState(0);
  const [restockedCakes, setRestockedCakes] = useState(0);

  return (
    <>
      <Cake />
      <div className="flex flex-col gap-4">
        <button className="bg-cyan-500" onClick={() => dispatch(order1Cake())}>
          Order 1 Cake
        </button>
        <input
          className="rounded border-cyan-500 border-2"
          type="number"
          value={numberOfCakes}
          onChange={(e) => {
            setNumberOfCakes(e.target.value);
          }}
        />
        <button
          className="bg-cyan-500"
          onClick={() => dispatch(orderSpecificNumberOfCakes(numberOfCakes))}
          disabled={!numberOfCakes}
        >
          Order {numberOfCakes} Cake
        </button>
        <input
          className="rounded border-cyan-500 border-2"
          type="number"
          value={restockedCakes}
          onChange={(e) => {
            setRestockedCakes(e.target.value);
          }}
        />
        <button
          className="bg-cyan-500"
          onClick={() => dispatch(restockSpecificNumberOfCakes(restockedCakes))}
          disabled={!restockedCakes}
        >
          Restock {restockedCakes} Cake
        </button>
      </div>
    </>

    // <div className="container mx-auto px-4 bg-yellow-600">
    // <div className="md:container lg:font-bold bg-yellow-600 md:bg-red-600 md:hover:bg-red-300">
    //   <h1 className="text-[2rem] font-bold underline">Hello world!</h1>
    // </div>
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    //   <div className="bg-cyan-600">01</div>
    //   <div className="bg-cyan-600">01</div>
    //   <div className="bg-cyan-600">01</div>
    //   <div className="bg-cyan-600">01</div>
    //   <div className="bg-cyan-600">01</div>
    //   <div className="bg-cyan-600">01</div>
    //   <div className="bg-cyan-600">01</div>
    //   <div className="bg-cyan-600">01</div>
    // </div>
  );
};

export default App;
