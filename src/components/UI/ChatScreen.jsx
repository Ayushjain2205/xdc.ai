import React, { useState, useRef, useEffect } from "react";

const UserMessage = ({ message }) => {
  return (
    <div className="flex flex-row items-start gap-[16px] pb-[16px] mb-[16px]">
      <img src="/images/user-message.svg" className="h-[36px]" alt="User" />
      <p className="text-[20px] font-bold">{message}</p>
    </div>
  );
};

const AIMessage = ({ message }) => {
  return (
    <div className=" pb-[48px] mb-[48px] border-b border-[#E7E9EB]">
      <div className="flex flex-row items-start gap-[16px]">
        <img src="/images/ai-message.svg" className="h-[36px]" alt="AI" />
        <p className="text-[16px]">{message}</p>
      </div>
      <div className="flex flex-col gap-[8px] mt-[30px]">
        <p className="text-[16px] opacity-40">Resources:</p>
        <div className="flex flex-row gap-[10px]">
          <div className="flex flex-row items-center h-[32px] gap-[7px] px-[18px] rounded-[10px] border border-[#7A7A7A] text-[#7A7A7A]">
            name of resource <img src="/icons/link.svg" alt="" />
          </div>
          <div className="flex flex-row items-center h-[32px] gap-[7px] px-[18px] rounded-[10px] border border-[#7A7A7A] text-[#7A7A7A]">
            name of resource <img src="/icons/link.svg" alt="" />
          </div>
          <div className="flex flex-row items-center h-[32px] gap-[7px] px-[18px] rounded-[10px] border border-[#7A7A7A] text-[#7A7A7A]">
            name of resource <img src="/icons/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] mt-[16px]">
        <p className="text-[16px] opacity-40">Related prompts:</p>
        <div className="flex flex-row gap-[10px]">
          <div className="flex flex-row items-center h-[24px] gap-[7px] px-[8px] rounded-[4px] bg-white text-[#7A7A7A] text-[14px]">
            How do I deploy a NFT contract?
          </div>
          <div className="flex flex-row items-center h-[24px] gap-[7px] px-[8px] rounded-[4px] bg-white text-[#7A7A7A] text-[14px]">
            How do I debug a contract?
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const svgFillColor = inputValue ? "#D34D3E" : "#E7E9EB";

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: inputValue },
        { sender: "ai", text: "AI response for: " + inputValue }, // This is a dummy response
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full px-[16px]">
      <div className="flex-1 overflow-y-scroll">
        {messages.map((message, index) => {
          if (message.sender === "user") {
            return <UserMessage key={index} message={message.text} />;
          } else if (message.sender === "ai") {
            return <AIMessage key={index} message={message.text} />;
          } else {
            return null;
          }
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex-none">
        <div className="flex flex-row items-center pr-[12px] rounded-[2px] border-[3px] border-[#E7E9EB] bg-transparent w-full h-[64px]">
          <input
            className="bg-transparent w-full p-[18px] focus:outline-none"
            type="text"
            placeholder="Send a prompt"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSendMessage}
          >
            <path
              d="M0 4.5C0 3.30653 0.474106 2.16193 1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0L31.5 0C32.6935 0 33.8381 0.474106 34.682 1.31802C35.5259 2.16193 36 3.30653 36 4.5V31.5C36 32.6935 35.5259 33.8381 34.682 34.682C33.8381 35.5259 32.6935 36 31.5 36H4.5C3.30653 36 2.16193 35.5259 1.31802 34.682C0.474106 33.8381 0 32.6935 0 31.5V4.5ZM12.375 27C12.3749 27.2169 12.4376 27.4291 12.5553 27.6112C12.6731 27.7933 12.841 27.9375 13.0387 28.0264C13.2365 28.1153 13.4558 28.1452 13.6702 28.1124C13.8845 28.0796 14.0848 27.9855 14.247 27.8415L24.372 18.8415C24.491 18.7359 24.5862 18.6064 24.6514 18.4613C24.7166 18.3163 24.7503 18.159 24.7503 18C24.7503 17.841 24.7166 17.6837 24.6514 17.5387C24.5862 17.3936 24.491 17.2641 24.372 17.1585L14.247 8.1585C14.0848 8.01451 13.8845 7.92045 13.6702 7.88764C13.4558 7.85484 13.2365 7.88469 13.0387 7.9736C12.841 8.06251 12.6731 8.2067 12.5553 8.38879C12.4376 8.57089 12.3749 8.78314 12.375 9V27Z"
              fill={svgFillColor}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
