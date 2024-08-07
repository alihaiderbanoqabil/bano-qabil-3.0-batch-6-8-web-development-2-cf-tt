import React, { memo, useContext } from "react";
import Child2 from "./Child2";
import { NameContext } from "./Parent";

const Child1 = ({}) => {
  // const value = useContext(NameContext);
  console.log("Child1 calling");

  return (
    <div>
      Child1 {name}
      <Child2 name={name} />
    </div>
  );
};

export default memo(Child1);

// const Child1 = ({ name }) => {
//   // const value = useContext(NameContext);
//   console.log("Child1 calling");

//   return (
//     <div>
//       Child1 {name}
//       <Child2 name={name} />
//     </div>
//   );
// };

// export default Child1;
