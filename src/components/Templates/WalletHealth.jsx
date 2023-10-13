import React from "react";

const WalletHealth = () => {
  return (
    <div className="w-full flex flex-col gap-[16px]">
      <div className="flex flex-row justify-between">
        <span className="text-black text-[20px]">Balance</span>
        <span className="font-bold text-[20px] text-[#07adcd]">759 XDC</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-black text-[20px]">Portfolio</span>
        <span className=" font-bold text-[20px] text-[#07adcd]">$51</span>
      </div>
      <div className="flex flex-row  justify-between">
        <span className="text-black text-[20px]">Health score</span>
        <span className="font-bold text-[20px] text-[#07adcd]">74/100</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-black text-[20px]">Exposure</span>
        <span className="font-bold text-[20px] text-[#0FA958]">
          NO THREAT 👍
        </span>
      </div>
      <div className="collapse collapse-arrow border-b rounded-none">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-[20px] pl-0">Warning</div>
        <div className="collapse-content pl-0 flex flex-col gap-[14px]">
          <a
            href="https://revoke.cash/address/0xCafa93E9985793E2475bD58B9215c21Dbd421fD0?chainId=1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row justify-between alert alert-error rounded-[8px]">
              <span className="text-[16px] text-white font-bold">
                You have signed UNLIMITED confirmations
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-white shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://revoke.cash/address/0xCafa93E9985793E2475bD58B9215c21Dbd421fD0?chainId=1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row justify-between alert alert-error rounded-[8px]">
              <span className="text-[16px] text-white font-bold">
                Verify before approving transaction requestions
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-white shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WalletHealth;
