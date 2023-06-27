import React from "react";

const UseModal = () => {
  const [open, setOpen] = React.useState(false);
  const openM = () => {
    setOpen(true);
  };
  const closeM = () => {
    setOpen(false);
  };

  const toggleM = () => {
    setOpen(!open);
  };
  return { open, openM, closeM, toggleM };
};

export default UseModal;
