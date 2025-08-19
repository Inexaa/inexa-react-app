import React from "react";
import { MdChat } from "react-icons/md";


const ChatUs = () => {
  return (
    <>
      {/* <div className=" chat-us fixed right-4 bottom-2 lg:bottom-6 ">
        <MdChat className="text-white text-3xl  bg-primaryColor w-9 h-9 md:w-12 md:h-12 flex items-center justify-center p-2 cursor-pointer" />
      </div> */}
      <div className=" chat-us wrapper ">
        <img className=" text-white text-3xl  bg-primaryColor min-w-9 min-h-9 md:w-12 md:h-12 flex items-center justify-center p-2 cursor-pointer" src="/images/chat-icon.svg" alt="icon" />
      </div>
    </>
  );
};

export default ChatUs;
