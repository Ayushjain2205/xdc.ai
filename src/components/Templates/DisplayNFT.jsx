import React from "react";

const DisplayNFT = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div>
        <img
          className="h-[296px] w-[489px] border border-black"
          src="/images/nft.png"
          alt=""
        />
      </div>
      <div>
        <p>Name :Snow Capped Mountains </p>
        <p>Price : $9</p>

        <p className="mt-[20px]">
          Ownership address : xdce8211Cd3f9D23B5ceDb9112EEff04257a5ff0a6f
        </p>
      </div>
    </div>
  );
};

export default DisplayNFT;
