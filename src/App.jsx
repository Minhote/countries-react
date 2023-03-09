import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header, Search } from "./components";

export default function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div
      className={`${theme} grid grid-rows-[repeat(3,min-content)] font-sans `}
    >
      <Header></Header>
      <Outlet />
    </div>
  );
}
