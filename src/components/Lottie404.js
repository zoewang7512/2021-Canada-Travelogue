import Lottie from "react-lottie";
import animationData from "../assets/404.json";

export default function Lottie404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="animation">
      <Lottie options={defaultOptions} height={300} width={400} speed={0.25} />
    </div>
  );
}
