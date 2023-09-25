import React from "react";

const ChatScreen = () => {
  return (
    <div className="flex flex-col h-full px-[16px]">
      <div className="flex-1 overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam.
        Dolorem sapiente deserunt obcaecati quidem, autem dicta deleniti id quae
        assumenda fuga odit commodi consequuntur. Unde tempore officia id quasi.
      </div>
      <div className="flex-none">
        <div className="flex flex-row items-center pr-[12px] rounded-[2px] border-[3px] border-[#E7E9EB] bg-transparent w-full h-[64px]">
          <input
            className="bg-transparent w-full p-[18px] focus:outline-none"
            type="text"
            placeholder="Send a prompt"
          />
          <img src="/icons/send.svg" className="h-[36px] w-[36px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
