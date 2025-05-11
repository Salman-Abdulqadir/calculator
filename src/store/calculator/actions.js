import { INITIAL_STATE, OPERATORS, ZERO, DECIMAL_POINT } from "./constants";

/**
 * Safely evaluates a string-based mathematical expression.
 *
 * @param {string} opToCompute - The expression string to evaluate (e.g., "12+3*4").
 * @returns {string} The computed result as a string, or "Error" if evaluation fails.
 *
 * @example
 * calculate("2+2") // "4"
 *
 * @note Uses `eval()` internally, which assumes all input is sanitized.
 */
export const calculate = (opToCompute) => {
  try {
    const computed = eval(opToCompute);
    return computed?.toString();
  } catch (e) {
    console.error("Something went wrong...", e);
  }
  return "Error";
};

/**
 * Handles numeric and decimal input by updating the operation string and computing the current result.
 *
 * @param {string} digit - The digit or decimal point (e.g., "1", "0", ".").
 * @param {Function} set - Zustand's state setter.
 * @param {Function} get - Zustand's state getter.
 *
 * @edge-cases
 * - Prevents duplicate decimals like "3..1".
 * - Replaces leading "0" with digit (e.g., "012" → "12").
 * - Replaces trailing "0" after an operator with the new digit.
 *
 * @example
 * inputDigit("7", set, get);
 */
export const inputDigit = (digit, set, get) => {
  const { allOperations } = get();
  const lastChar = allOperations.at(-1);
  if (
    (OPERATORS?.includes(lastChar) || lastChar === DECIMAL_POINT) &&
    digit === DECIMAL_POINT
  )
    return;

  let opToCompute = allOperations + digit;
  if (allOperations?.startsWith(ZERO) && digit !== DECIMAL_POINT) {
    opToCompute = digit;
  } else if (lastChar === ZERO && digit !== DECIMAL_POINT) {
    opToCompute = allOperations.slice(0, -1) + digit;
  }

  const computed = calculate(opToCompute);
  set(() => ({
    allOperations: opToCompute,
    result: computed,
  }));
};

/**
 * Handles operator input (e.g., "+", "-", "*", "/") by updating the operation string.
 *
 * @param {string} operator - The operator to input.
 * @param {Function} set - Zustand's state setter.
 * @param {Function} get - Zustand's state getter.
 *
 * @edge-cases
 * - Replaces the last operator if another is pressed consecutively.
 * - Prevents duplicating operators like "++" or "**".
 *
 * @example
 * inputOperator("+", set, get);
 */
export const inputOperator = (operator, set, get) => {
  const { allOperations } = get();
  const lastOperator = allOperations.at(-1);

  if (OPERATORS?.includes(lastOperator)) {
    if (lastOperator === operator) return;
    // Override the operator
    return set(() => ({
      allOperations: allOperations.slice(0, -1) + operator,
    }));
  }
  set(() => ({
    allOperations: allOperations + operator,
  }));
};

/**
 * Finalizes and computes the full operation string.
 * Replaces `allOperations` with the result for continued input.
 *
 * @param {Function} set - Zustand's state setter.
 * @param {Function} get - Zustand's state getter.
 *
 * @example
 * evaluate(set, get);
 */
export const evaluate = (set, get) => {
  const { allOperations } = get();

  const computed = calculate(allOperations);
  set({
    result: computed,
    allOperations: computed,
  });
};

/**
 * Deletes the last character from the current operation string.
 * Also re-evaluates the expression (excluding trailing operator if needed).
 *
 * @param {Function} set - Zustand's state setter.
 * @param {Function} get - Zustand's state getter.
 *
 * @edge-cases
 * - Deletes operator safely by trimming further if it's the last character.
 * - If nothing is left, resets to initial state.
 *
 * @example
 * deleteDigit(set, get);
 */
export const deleteDigit = (set, get) => {
  const { allOperations } = get();
  const updated = allOperations?.slice(0, -1);
  const updatedLastChar = updated?.at(-1);
  set(() => ({
    allOperations: updated || INITIAL_STATE.allOperations,

    result: updated
      ? calculate(
          OPERATORS?.includes(updatedLastChar) ? updated.slice(0, -1) : updated
        )
      : INITIAL_STATE.result,
  }));
};
