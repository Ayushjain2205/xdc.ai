import Image from "next/image";
import Layout from "../components/UI/Layout";
import Navbar from "../components/UI/Navbar";
import SideBar from "../components/UI/SideBar";
import ChatScreen from "../components/UI/ChatScreen";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="flex overflow-hidden mt-[32px]">
        <SideBar />
        <ChatScreen />
      </div>
    </Layout>
  );
}
