import Image from "next/image";
import Layout from "../components/UI/Layout";
import Navbar from "../components/UI/Navbar";
import SideBar from "../components/UI/SideBar";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-1 overflow-hidden mt-[32px]">
        <SideBar />
        {/* Other components can go here */}
      </div>
    </Layout>
  );
}
