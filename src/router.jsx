import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}
