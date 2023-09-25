import React from "react";

const Layout = ({ children }) => {
  return <div className="flex flex-col p-[32px] h-screen">{children}</div>;
};

export default Layout;
