import React, { useState } from "react";
import "@/styles/globals.css";
import { ModeContext } from "../contexts/ModeContext";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("normal");
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="d6fcba1f4ea6bc6fc9bdbdc26466a30f"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
        embeddedWallet(),
      ]}
    >
      <ModeContext.Provider value={{ mode, setMode }}>
        <Component {...pageProps} />
      </ModeContext.Provider>
    </ThirdwebProvider>
  );
}
