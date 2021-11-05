import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NewMessage } from "../redux/action/chat";

const RightSide = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") return;
    const newMessage = {
      id: Math.random() + Date.now(),
      text,
      from: "right",
    };
    dispatch(NewMessage(newMessage));
    setText("");
  };
  const { messages } = useSelector((state) => state.chat);
  return (
    <div id="right-side-chat">
      <div className="navbar">Pistonchi</div>

      <main id="chat" className="right-side-chat-main">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`message ${
                message.from === "right" ? "to" : "from"
              }-you`}
            >
              {message.text}
            </div>
          );
        })}
      </main>

      <form id="right-side-chat-form" onSubmit={handleSubmit}>
        <textarea
          name="message"
          id="message"
          rows="1"
          placeholder="Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">
          <i className="fab fa-telegram-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default RightSide;
