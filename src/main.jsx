import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeLayout from "./layouts/HomeLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SportEquipmentsPage from "./pages/SportEquipmentsPage.jsx";
import AddEquipment from "./pages/AddEquipment.jsx";
import MyEquipments from "./pages/MyEquipments.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="equipments" element={<SportEquipmentsPage />} />
            <Route path="addEquipment" element={<AddEquipment />} />
            <Route path="myEquipments" element={<MyEquipments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
