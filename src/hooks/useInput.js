import React from "react";

const UseInput = (inputs) => {
  const [value, setValue] = React.useState(inputs);
  return {
    value,
    changeValue: (e) =>
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      }),
  };
};

export default UseInput;
