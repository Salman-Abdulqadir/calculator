import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./store/theme/provider.jsx";
import Calculator from "./pages/calculator/index.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  </StrictMode>
);
