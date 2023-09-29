import React, { useContext, useState } from "react";
import Layout from "../components/UI/Layout";
import Navbar from "../components/UI/Navbar";
import SideBar from "../components/UI/SideBar";
import ChatScreen from "../components/UI/ChatScreen";
import { ModeContext } from "../contexts/ModeContext";

export default function Home() {
  const { mode } = useContext(ModeContext);
  const [messages, setMessages] = useState([]);

  const handleClearMessages = () => {
    setMessages([]);
  };
  return (
    <div data-theme={mode}>
      <Layout>
        <Navbar />
        <div className="flex flex-1 overflow-hidden mt-[32px]">
          <SideBar onClearMessages={handleClearMessages} />
          <ChatScreen messages={messages} setMessages={setMessages} />
        </div>
      </Layout>
    </div>
  );
}
