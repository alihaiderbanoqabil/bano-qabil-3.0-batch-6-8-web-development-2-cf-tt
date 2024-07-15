import React from "react";

const Greeting = (props) => {
  console.log("props: ", props, props.age);
  let name;
  // name = "ali haider";
  // if (name) {
  //   return <h1>Your name is ${name}</h1>;
  // }
  // if (isLoading) {
  //   return "Loading...";
  // } else if (error) {
  //   return "Error while fetching users";
  // } else {
  //   return "Users table";
  // }

  // if (props.age) {
  //   return (
  //     <div>
  //       <h1>Heading 1</h1>
  //       <h2>Heading 2</h2>
  //       Hello, Good morning {props.name}{" "}
  //       {/* {props.age !== 0 || props.age !== undefined */}
  //       {/* {props.age ? `, and your age is ${props.age}` : `no age props passed`} */}
  //       {/* {props.h1} */}
  //       {/* {Boolean(props.age) && `, and your age is ${props.age}`} */}, and
  //       your age is {props.age}
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <h1>Heading 1</h1>
  //     <h2>Heading 2</h2>
  //     Hello, Good morning {props.name}{" "}
  //     {/* {props.age !== 0 || props.age !== undefined */}
  //     {/* {props.age ? `, and your age is ${props.age}` : `no age props passed`} */}
  //     {/* {props.h1} */}
  //     {/* {Boolean(props.age) && `, and your age is ${props.age}`} */}
  //   </div>
  // );

  return (
    <div>
      {/* <h1>Heading 1</h1>
      <h2>Heading 2</h2> */}
      Hello, Good morning {props.name}{" "}
      {/* {props.age !== 0 || props.age !== undefined */}
      {/* {props.age ? `, and your age is ${props.age}` : `no age props passed`} */}
      {/* {props.h1} */}
      {/* {Boolean(props.age) && `, and your age is ${props.age}`} */}
      {!!props.age && `, and your age is ${props.age}`}
    </div>
  );
};

export default Greeting;
