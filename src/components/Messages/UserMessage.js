const UserMessage = ({ message }) => {
  return (
    <div className="flex flex-row items-start gap-[16px] pb-[16px] mb-[16px]">
      <img src="/images/user-message.svg" className="h-[36px]" alt="User" />
      <p className="text-[16px] font-bold">{message}</p>
    </div>
  );
};

export default UserMessage;
