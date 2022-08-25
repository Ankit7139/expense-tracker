import React, { useState } from "react";

export const Delbtn = () => {
  const [check, setCheck] = useState([]);
  const [list, setList] = useState([]);
  const alldelete = () => {
    setCheck(!check);
    setCheck(list.map((li) => li.id));
    if (check) {
      setCheck([]);
    }
  };
  return (
    <button className="btn btn-danger" onClick={alldelete}>
      Select All
    </button>
  );
};
