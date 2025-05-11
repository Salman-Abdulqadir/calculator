import { OPERATORS } from "../../store/calculator/constants";

export const keyboardClickHandler = (
  e,
  handleClick,
  deleteDigit,
  evaluate,
  clear
) => {
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
};
