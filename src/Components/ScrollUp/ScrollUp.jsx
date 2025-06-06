import { useEffect, useState } from "react";
import "./ScrollUp.css";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    visible && (
      <div className="scroll-up">
        <button onClick={scrollToTop}>
          <FaAnglesUp className="scroll-icon" />
        </button>
      </div>
    )
  );
};

export default ScrollUp;
