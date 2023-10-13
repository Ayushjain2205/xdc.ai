import React, { useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";

const UserMessage = ({ message }) => {
  const { mode } = useContext(ModeContext);
  const image =
    mode === "dev"
      ? "/images/user-message-dev.svg"
      : "/images/user-message-normal.svg";

  return (
    <div className="flex flex-row items-start gap-[16px] pb-[16px] mb-[16px]">
      <img src={image} className="h-[36px]" alt="User" />
      <p className="text-[16px] font-bold">{message}</p>
    </div>
  );
};

export default UserMessage;
