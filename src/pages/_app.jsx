import React, { useState } from "react";
import "@/styles/globals.css";
import { ModeContext } from "../contexts/ModeContext";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("normal");
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <Component {...pageProps} />
    </ModeContext.Provider>
  );
}
