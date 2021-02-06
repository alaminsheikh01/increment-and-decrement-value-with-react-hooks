import React, { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  const onClickDec = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <div>
      <h1>Please click me for increase {count}</h1>
      <button className="btn btn-primary btn-sm" onClick={onClick}>
        +
      </button>
      <button className="btn btn-primary btn-sm" onClick={onClickDec}>
        -
      </button>
    </div>
  );
};

export default Home;
