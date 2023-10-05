import React from "react";
import Lottie from "react-lottie-player";
import loader from "../../helpers/loader.json";

const Loader = () => {
  return (
    <div>
      <Lottie
        loop
        animationData={loader}
        play
        style={{ width: 117, height: 117 }}
      />
    </div>
  );
};

export default Loader;
