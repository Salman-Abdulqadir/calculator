import { useCalculator } from "../../../store/calculator/calculator";

const Screen = () => {
  const { result, allOperations } = useCalculator();
  return (
    <div className="bg-screen rounded-lg py-4 px-6 flex  flex-col items-end">
      <div className="text-sm opacity-50 overflow-x-scroll max-w-full whitespace-nowrap scrollbar-h-0 pb-4">
        {allOperations}
      </div>
      <div className="text-bold text-[48px]">{result}</div>
    </div>
  );
};

export default Screen;
