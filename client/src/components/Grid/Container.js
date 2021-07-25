import React from "react";

const styling = {
  top: "10"
}

export const Container = ({fluid, children}) => <div className={`container${fluid
  ? "-fluid"
  : ""}`}>
  {children}
</div>;
