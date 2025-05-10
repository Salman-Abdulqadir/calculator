import KeypadButton from "../../../components/keypad-button";

const Keyboard = () => {
  const itemsGrid = [
    [
      { label: "7", value: 7, onClick: () => {}, buttonVariant: "" },
      { label: "8", value: 8, onClick: () => {}, buttonVariant: "" },
      { label: "9", value: 9, onClick: () => {}, buttonVariant: "" },
      {
        label: "DEL",
        value: "Del",
        onClick: () => {},
        buttonVariant: "secondary",
      },
    ],
    [
      { label: "4", value: 4, onClick: () => {}, buttonVariant: "" },
      { label: "5", value: 5, onClick: () => {}, buttonVariant: "" },
      { label: "6", value: 6, onClick: () => {}, buttonVariant: "" },
      { label: "+", value: "+", onClick: () => {}, buttonVariant: "" },
    ],
    [
      { label: "1", value: 1, onClick: () => {}, buttonVariant: "" },
      { label: "2", value: 2, onClick: () => {}, buttonVariant: "" },
      { label: "3", value: 3, onClick: () => {}, buttonVariant: "" },
      { label: "-", value: "-", onClick: () => {}, buttonVariant: "" },
    ],
    [
      { label: ".", value: ".", onClick: () => {}, buttonVariant: "" },
      { label: "0", value: 0, onClick: () => {}, buttonVariant: "" },
      { label: "/", value: "/", onClick: () => {}, buttonVariant: "" },
      { label: "x", value: "x", onClick: () => {}, buttonVariant: "" },
    ],
  ];
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full bg-foreground p-6 rounded-lg">
      {/* First 4 rows */}
      {itemsGrid
        .map((row) =>
          row.map((item) => (
            <KeypadButton variant={item.buttonVariant} onClick={item.onClick}>
              {item.label}
            </KeypadButton>
          ))
        )
        .flat()}

      {/* 5th row */}
      <div className="col-span-2">
        <KeypadButton variant={"secondary"}>RESET</KeypadButton>
      </div>
      <div className="col-span-2">
        <KeypadButton variant={"accent"}>=</KeypadButton>
      </div>
    </div>
  );
};

export default Keyboard;
