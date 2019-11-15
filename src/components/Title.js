import React from "react";

function Title({ title }) {
  return (
    <div className="row justify-content-center">
      <div className="col-10 my-3 text-center">
        <h1 className="text-capitalize font-weight-bold">{title}</h1>
      </div>
    </div>
  );
}

export default Title;
