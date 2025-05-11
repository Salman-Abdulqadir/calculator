const HISTORY_STORAGE_KEY = "CALCULATOR_HISTORY";

export class HistoryStorageService {
  static addHistory(operation, result) {
    const payload = {
      operation,
      result,
      time: new Date(),
    };
    const allHistory = this.getHistory();
    allHistory.unshift(payload);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(allHistory));
  }
  static getHistory() {
    const historyString = localStorage.getItem(HISTORY_STORAGE_KEY);
    try {
      const history = JSON.parse(historyString);
      return Array.isArray(history) ? history : [];
    } catch {
      return [];
    }
  }
  static clearHistory() {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify([]));
  }
}
