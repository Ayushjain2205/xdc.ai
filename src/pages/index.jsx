import React, { useContext } from "react";
import Layout from "../components/UI/Layout";
import Navbar from "../components/UI/Navbar";
import SideBar from "../components/UI/SideBar";
import ChatScreen from "../components/UI/ChatScreen";
import { ModeContext } from "../contexts/ModeContext";

export default function Home() {
  const { mode } = useContext(ModeContext);
  return (
    <div data-theme={mode}>
      <Layout>
        <Navbar />
        <div className="flex flex-1 overflow-hidden mt-[32px]">
          <SideBar />
          <ChatScreen />
        </div>
      </Layout>
    </div>
  );
}
