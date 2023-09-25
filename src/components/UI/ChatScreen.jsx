import React from "react";

const ChatScreen = () => {
  return (
    <div className="flex flex-col h-full px-[16px]">
      <div className="flex-1 overflow-y-scroll"></div>
      <div className="flex-none">
        <input className="border w-full mt-2" type="text" />
      </div>
    </div>
  );
};

export default ChatScreen;
