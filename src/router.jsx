import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Home, Region, Details } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path=":region" element={<Region />} />
        <Route path="details">
          <Route path=":country" element={<Details />} />
        </Route>
      </Route>
    </Routes>
  );
}
