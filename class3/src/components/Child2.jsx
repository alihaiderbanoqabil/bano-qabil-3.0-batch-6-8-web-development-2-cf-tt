import React, { memo, useContext } from "react";
import { NameContext } from "./Parent";

const Child2 = ({ name }) => {
  //   const value = useContext(NameContext);
  console.log("Child2 calling");
  return (
    <div>
      Child2 {name}
      {/* {value.name} */}
      {/* <input
        type="text"
        value={value.name}
        onChange={(e) => value.setName(e.target.value)}
      /> */}
    </div>
  );
  //   return <div>{name}</div>;
};

export default memo(Child2);

// const Child2 = ({ name }) => {
//   //   const value = useContext(NameContext);
//   console.log("Child2 calling");
//   return (
//     <div>
//       Child2 {name}
//       {/* {value.name} */}
//       {/* <input
//         type="text"
//         value={value.name}
//         onChange={(e) => value.setName(e.target.value)}
//       /> */}
//     </div>
//   );
//   //   return <div>{name}</div>;
// };

// export default Child2;
