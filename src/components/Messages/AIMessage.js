import React, { useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";

const AIMessage = ({
  message,
  resources = [],
  relatedPrompts = [],
  showResource = false,
  showPrompt = false,
  ChildComponent = null,
}) => {
  const { mode } = useContext(ModeContext);
  const backgroundColor = mode === "dev" ? "#1F1416" : "#fff";

  const displayedResources =
    resources.length === 0
      ? [{ name: "Default Resource 1" }, { name: "Default Resource 2" }]
      : resources;

  const displayedPrompts =
    relatedPrompts.length === 0
      ? [{ prompt: "Default Prompt 1" }, { prompt: "Default Prompt 2" }]
      : relatedPrompts;

  return (
    <div className="pb-[48px] mb-[48px] border-b border-[#E7E9EB]">
      <div className="flex flex-row items-start gap-[16px]">
        <div
          className="flex flex-col items-center justify-center h-[36px] w-[36px] rounded-full flex-shrink-0"
          style={{ backgroundColor: backgroundColor }}
        >
          <img src="/icons/tron.svg" className="h-[16px] w-[16px]" alt="AI" />
        </div>
        <div className="flex flex-col gap-[12px]">
          <p className="text-[16px]">{message}</p>
          <div> {ChildComponent && <ChildComponent />}</div>
        </div>
      </div>

      {showResource && (
        <div className="flex flex-col gap-[8px] mt-[30px]">
          <p className="text-[16px] opacity-40">Resources:</p>
          <div className="flex flex-row gap-[10px]">
            {displayedResources.map((resource, index) => (
              <div
                key={index}
                className="flex flex-row items-center h-[32px] gap-[7px] px-[18px] rounded-[10px] border border-[#7A7A7A] text-[#7A7A7A]"
              >
                {resource.name} <img src="/icons/link.svg" alt="Link icon" />
              </div>
            ))}
          </div>
        </div>
      )}
      {showPrompt && (
        <div className="flex flex-col gap-[8px] mt-[16px]">
          <p className="text-[16px] opacity-40">Related prompts:</p>
          <div className="flex flex-row gap-[10px]">
            {displayedPrompts.map((prompt, index) => (
              <div
                key={index}
                className="flex flex-row items-center h-[24px] gap-[7px] px-[8px] rounded-[4px] bg-white text-[#7A7A7A] text-[14px]"
              >
                {prompt.prompt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMessage;
