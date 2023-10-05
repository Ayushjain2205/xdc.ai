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
          Ownership address : TSzW16CE9Zta1TbaKND44b8HkSwpqzNAra
        </p>
      </div>
    </div>
  );
};

export default DisplayNFT;
