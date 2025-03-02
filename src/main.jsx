import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
