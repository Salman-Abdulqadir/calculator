import KeypadButton from "../../../components/keypad-button";
import { useCalculator } from "../../../store/calculator/calculator";
import useKeyboard from "../../../hooks/useKeyboard";

const Keyboard = () => {
  const { inputDigit, inputOperator, evaluate, clear, deleteDigit } =
    useCalculator();

  const handleClick = (value) => {
    if (!isNaN(value) || value === ".") {
      inputDigit(value);
    } else {
      inputOperator(value);
    }
  };

  const itemsGrid = [
    [
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
      {
        label: "DEL",
        value: "Backspace",
        action: deleteDigit,
        variant: "secondary",
      },
    ],
    [
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "+", value: "+" },
    ],
    [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "-", value: "-" },
    ],
    [
      { label: ".", value: "." },
      { label: "0", value: "0" },
      { label: "/", value: "/" },
      { label: "x", value: "*" },
    ],
  ];
  useKeyboard({ handleClick });
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full bg-foreground p-6 rounded-lg">
      {itemsGrid.flat().map(({ label, value, action, variant }) => (
        <KeypadButton
          key={label}
          variant={variant}
          data-key={value || label}
          onClick={() => {
            if (action) action();
            else handleClick(value);
          }}
        >
          {label}
        </KeypadButton>
      ))}
      <div className="col-span-2">
        <KeypadButton variant="secondary" onClick={clear} data-key={"c"}>
          RESET
        </KeypadButton>
      </div>
      <div className="col-span-2">
        <KeypadButton variant="accent" onClick={evaluate} data-key={"Enter"}>
          =
        </KeypadButton>
      </div>
    </div>
  );
};

export default Keyboard;
