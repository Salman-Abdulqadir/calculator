import ThemeChanger from "../../../components/theme-changer";
import History from "./history";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-3xl">calc</h2>
      <div className="flex items-center gap-4">
        <span className="text-xs -mb-3">THEME</span>
        <ThemeChanger />
        <History />
      </div>
    </div>
  );
};

export default Header;
