import "./App.css";
import { Catalog } from "./components/Catalog/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardDetails } from "./components/CardDetails/index.js";
import { Auth } from "./Pages/Auth/index.js";
import { HomePage } from "./Pages/HomePage/index.js";
import { createTheme, ThemeProvider } from "@mui/material";
const colors = {
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};
const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.dark,
        },
      },
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="auth" element={<Auth />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CardDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
