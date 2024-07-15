import React from "react";

const Children = (props) => {
  const { title, description, children } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <section>{children}</section>
    </div>
  );
};

export default Children;
