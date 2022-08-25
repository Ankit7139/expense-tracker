import React from "react";

export const DeleteAll = () => {
  const alldelete = () => {
    window.location.reload();
  };
  return (
    <button className="btn btn-danger" onClick={alldelete}>
      Delete All
    </button>
  );
};
