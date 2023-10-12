import React, { useContext } from "react";
// import ConnectWallet from "../Functional/ConnectWallet";
import { ConnectWallet } from "@thirdweb-dev/react";
import Realtime from "../Functional/Realtime";
import { ModeContext } from "../../contexts/ModeContext";

const Navbar = () => {
  const { mode, setMode } = useContext(ModeContext);
  const checked = mode === "dev"; // true if mode is dev, false if light

  return (
    <nav className="flex justify-between items-center h-[56px]">
      <div className="flex-1">
        <span className="text-[32px] font-bold text-primary">XDC.ai</span>
      </div>
      <div className="flex flex-row gap-[24px]">
        <Realtime />
        {/* <ConnectWallet /> */}
        <ConnectWallet
          theme={"light"}
          switchToActiveChain={true}
          modalSize={"wide"}
          className={`connect-wallet ${checked ? "connect-wallet-dev" : ""}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
