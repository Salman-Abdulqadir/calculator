import React from "react";
import { useTheme } from "../store/theme/hooks";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const themeMap = {
    "theme-1": 1,
    "theme-2": 2,
    "theme-3": 3,
  };
  return (
    <div className="space-y-1 max-w-[60px]">
      <ul className="flex items-center justify-between px-2">
        {[1, 2, 3].map((num) => (
          <li className={`text-xs`} key={num}>
            {num}
          </li>
        ))}
      </ul>
      <input
        type="range"
        className="w-full"
        min={1}
        max={3}
        step={1}
        onChange={(e) => setTheme(`theme-${e.target.value}`)}
        defaultValue={themeMap?.[theme]}
      />
    </div>
  );
};

export default ThemeChanger;
