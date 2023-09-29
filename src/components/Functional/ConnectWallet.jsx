import React, { useEffect, useState } from "react";
import TronWeb from "tronweb";
import * as Popover from "@radix-ui/react-popover";

function ConnectWallet() {
  const [tronWeb, setTronWeb] = useState(null);

  useEffect(() => {
    if (window.tronWeb && window.tronWeb.ready) {
      setTronWeb(window.tronWeb);
    } else {
      window.addEventListener("load", () => {
        if (window.tronWeb && window.tronWeb.ready) {
          setTronWeb(window.tronWeb);
        } else {
          console.warn("TronWeb is not installed. Install TronLink.");
        }
      });
    }
  }, []);

  const handleDisconnect = () => {
    setTronWeb(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {tronWeb ? (
        <Popover.Root>
          <Popover.Trigger asChild>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center rounded-full bg-primary h-12 w-12">
                <img src="/icons/dude.svg" alt="Avatar" />
              </div>
              <span className="text-gray-700">
                {tronWeb.defaultAddress.base58}
              </span>
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              <button
                className="btn btn-primary rounded-none bg-primary h-[48px] w-[192px] font-bold text-white"
                onClick={handleDisconnect}
              >
                Disconnect Wallet
              </button>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <button
            className="btn btn-primary rounded-none bg-primary h-[48px] w-[192px] font-bold text-white"
            onClick={() => {
              if (window.tronWeb && window.tronWeb.ready) {
                setTronWeb(window.tronWeb);
              } else {
                console.warn("TronWeb is not installed. Install TronLink.");
              }
            }}
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
