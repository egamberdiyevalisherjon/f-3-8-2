import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    console.log(messages);
    dispatch({
      type: "INITIAL_MESSAGES",
      payload: messages,
    });
  }, [dispatch]);
  return (
    <div className="App">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
