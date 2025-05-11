import { useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "../../../components/drawer";
import HistoryIcon from "../../../components/icons/history-icon";
import { useCalculator } from "../../../store/calculator/calculator";
import { timeAgo } from "../../../lib/helpers";
import KeypadButton from "../../../components/keypad-button";

const History = () => {
  const {
    isHistoryOpen,
    toggleHistoryDrawer,
    fetchHistory,
    history,
    clearHistory,
  } = useCalculator();

  useEffect(() => {
    if (isHistoryOpen) {
      fetchHistory();
    }
  }, [isHistoryOpen, fetchHistory]);
  return (
    <Drawer
      direction="right"
      className="flex"
      open={isHistoryOpen}
      onOpenChange={toggleHistoryDrawer}
    >
      <DrawerTrigger className="cursor-pointer">
        <HistoryIcon />
      </DrawerTrigger>
      <DrawerContent className="w-full md:w-[400px] h-full justify-self-end rounded-r-none rounded-l-lg border-none">
        <DrawerHeader>
          <DrawerTitle className="flex justify-between items-center">
            <div>Calculator History</div>
            <DrawerClose className="cursor-pointer">X</DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerDescription className="px-4 space-y-3 overflow-x-scroll">
          {!history?.length ? (
            <div className=" flex flex-col justify-center items-center">
              No History
            </div>
          ) : (
            history?.map((item, index) => (
              <div
                key={index}
                className="space-y-2 p-2 rounded-lg bg-foreground"
              >
                <div className="text-sm max-w-full">{item?.operation}</div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl">{item?.result}</span>
                  <div className="flex text-sm">{timeAgo(item?.time)}</div>
                </div>
              </div>
            ))
          )}
        </DrawerDescription>
        <DrawerFooter>
          <button
            className="text-lg cursor-pointer bg-key-accent text-accent-text py-2 rounded-lg"
            onClick={clearHistory}
            disabled={!history?.length}
          >
            Clear History
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default History;
