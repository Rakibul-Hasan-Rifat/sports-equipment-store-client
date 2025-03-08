import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyEquipments = () => {
  const [productsByEmail, setProductsByEmail] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://sport-equipment-store-server.vercel.app/productsByUser?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((result) => setProductsByEmail(result))
      .catch((err) => console.log(err));
  }, [user.email]);

  return <div>MyEquipments</div>;
};

export default MyEquipments;
