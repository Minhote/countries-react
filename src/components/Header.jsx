import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/themeSlice";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <header className="bg-light-main dark:bg-dark-main flex items-center justify-between p-3 h-[10vh]">
      <h1 className="text-light-white dark:text-dark-white font-bold text-lg tracking-wider">
        Where in the world?
      </h1>
      <button
        className="text-light-white dark:text-dark-white font-medium text-base tracking-wide flex gap-2 items-center"
        onClick={() => dispatch(changeTheme())}
      >
        {theme === "light" ? <FaRegMoon /> : <FaRegSun />}
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};
