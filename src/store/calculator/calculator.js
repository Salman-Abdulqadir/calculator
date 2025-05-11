import { create } from "zustand";
import {
  deleteDigit,
  evaluate,
  inputDigit,
  inputOperator,
  setHistory,
  toggleHistoryDrawer,
  clearHistory,
} from "./actions";
import { INITIAL_STATE } from "./constants";

export const useCalculator = create((set, get) => ({
  ...INITIAL_STATE,

  inputDigit: (digit) => inputDigit(digit, set, get),

  inputOperator: (operator) => inputOperator(operator, set, get),

  evaluate: () => evaluate(set, get),

  deleteDigit: () => deleteDigit(set, get),

  clear: () => set(INITIAL_STATE),

  toggleHistoryDrawer: (isOpen) => toggleHistoryDrawer(isOpen, set),

  fetchHistory: () => setHistory(set),

  clearHistory: () => clearHistory(set),
}));
