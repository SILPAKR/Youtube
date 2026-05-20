import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helpers";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <div className="flex">
        <form
          className="w-full p-2 m-2 border border-black"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Silpa",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            className="w-90 px-2 border"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="px-2  mx-2 bg-green-100">send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
