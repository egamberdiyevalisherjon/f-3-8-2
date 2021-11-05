import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NewMessage } from "../redux/action/chat";

const LeftSide = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (text === "") return;

    const newMessage = {
      id: Math.random() + Date.now(),
      text,
      from: "left",
    };
    dispatch(NewMessage(newMessage));
    setText("");
  };

  const { messages } = useSelector((state) => state.chat);

  return (
    <div id="left-side-chat">
      <div className="navbar">Falonchi</div>

      <main id="chat" className="left-side-chat-main">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`message ${
                message.from === "left" ? "to" : "from"
              }-you`}
            >
              {message.text}
            </div>
          );
        })}
      </main>

      <form id="left-side-chat-form" onSubmit={handleSubmit}>
        <textarea
          name="message"
          id="message"
          rows="1"
          placeholder="Message"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button type="submit">
          <i className="fab fa-telegram-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default LeftSide;
