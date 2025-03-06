import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import EquipmentSection from "../components/EquipmentSection";

const HomePage = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    fetch("https://sport-equipment-store-server.vercel.app/products?limit=6")
      .then((res) => res.json())
      .then((result) => setEquipments(result));
  }, []);

  return (
    <>
      <Banner />
      <EquipmentSection equipments={equipments} />
    </>
  );
};

export default HomePage;
