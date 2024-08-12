import { useState } from "react";

export const add = (n1, n2) => {
  const [count, setCount] = useState(0);
  console.log({ count });

  return n1 + n2;
};
