import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <main className="app-loader">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export { Loader };
