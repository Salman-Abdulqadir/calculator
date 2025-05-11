import { useEffect } from "react";
import { OPERATORS } from "../store/calculator/constants";
import { useCalculator } from "../store/calculator/calculator";

const simulateKeypadPress = (key) => {
  const button = document.querySelector(`[data-key="${key}"]`);
  if (button) {
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 300);
  }
};

const useKeyboard = ({ handleClick }) => {
  const { evaluate, clear, deleteDigit } = useCalculator();
  useEffect(() => {
    const eventHandler = (e) => {
      const key = e.key;

      if (!isNaN(key) || key === ".") {
        handleClick(key);
      } else if (OPERATORS.includes(key)) {
        handleClick(key);
      } else if (key === "Backspace") {
        deleteDigit();
      } else if (key === "Enter" || key === "=") {
        evaluate();
      } else if (key.toLowerCase() === "c") {
        clear();
      } else if (key === "Delete") {
        clear();
      }
      simulateKeypadPress(key);
    };
    window.addEventListener("keydown", eventHandler);
    return () => window.removeEventListener("keydown", eventHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default useKeyboard;
