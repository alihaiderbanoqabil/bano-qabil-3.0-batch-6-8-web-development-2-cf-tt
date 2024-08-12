import React from "react";
import PropTypes from "prop-types";

const PropsTypeChecking = (props) => {
  const { name, age, isAdult, hobbies } = props;
  console.log({ name, age, isAdult, hobbies });

  return (
    <div>
      PropsTypeChecking
      {/* <pre>{JSON.stringify(props, undefined, 4)}</pre> */}
      <h1> Your name is: {name}</h1>
    </div>
  );
};

export default PropsTypeChecking;

PropsTypeChecking.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdult: PropTypes.bool,
  hobbies: PropTypes.array,
  info: PropTypes.object,
  add: PropTypes.func,
  h1: PropTypes.element,
  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty1: PropTypes.string,
    optionalProperty2: PropTypes.number,
  }),
};
