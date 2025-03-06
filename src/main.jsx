import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Login from "./components/Login.jsx";
import HomePage from "./pages/HomePage.jsx";
import Register from "./components/Register.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import AddEquipment from "./pages/AddEquipment.jsx";
import MyEquipments from "./pages/MyEquipments.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import DataDetails from "./components/DataDetails.jsx";
import SportEquipmentsPage from "./pages/SportEquipmentsPage.jsx";
import TabularDataSection from "./components/TabularDataSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="equipments" element={<SportEquipmentsPage />}>
              <Route index element={<TabularDataSection />} />
              <Route path=":id" element={<DataDetails />} />
            </Route>
            <Route path="addEquipment" element={<AddEquipment />} />
            <Route path="myEquipments" element={<MyEquipments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
