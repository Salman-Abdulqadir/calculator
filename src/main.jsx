import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./pages/calculator/index.jsx";
import { ThemeProvider } from "./store/theme/provider.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  </StrictMode>
);
