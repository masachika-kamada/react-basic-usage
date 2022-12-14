/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(false);

  const onClickCoutUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setFaceFlag(!faceFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceFlag || setFaceFlag(true);
      } else {
        faceFlag && setFaceFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんちには！</h1>
      <ColorfulMessage color="blue">how are you</ColorfulMessage>
      <ColorfulMessage color="pink">im fine</ColorfulMessage>
      <button onClick={onClickCoutUp}>cout up</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {faceFlag && <p>(^^♪</p>}
    </>
  );
};

export default App;
