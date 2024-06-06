import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ItineraryTitle = () => {
  const [typingStatus, setTypingStatus] = useState("Initializing");

  return (
    <TypeAnimation
      sequence={[
        2000,
        () => {
          setTypingStatus("Typing...");
        },
        "I have been to ...",
        () => {
          setTypingStatus("Done Typing");
        },
        1500,
        () => {
          setTypingStatus("Deleting...");
        },
        "",
        () => {
          setTypingStatus("Done Deleting");
        },
      ]}
      repeat={Infinity}
    />
  );
};
export default ItineraryTitle;
