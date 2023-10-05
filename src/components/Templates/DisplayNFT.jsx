import React from "react";

const DisplayNFT = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="h-[296px] w-[489px] border border-black"></div>
      <div>
        <p>Name : </p>
        <p>Price : </p>

        <p className="mt-[20px]">Ownership address : </p>
      </div>
    </div>
  );
};

export default DisplayNFT;
