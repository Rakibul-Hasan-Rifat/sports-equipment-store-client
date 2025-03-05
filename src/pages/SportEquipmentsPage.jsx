import { useEffect, useState } from "react";
import { Link } from "react-router";

const SportEquipmentsPage = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2345/products?limit=0")
      .then((res) => res.json())
      .then((result) => setEquipments(result));
  }, []);

  console.log(equipments.length);

  return (
    <div className="overflow-x-auto my-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {equipments?.map((equipment, idx) => (
            <tr key={equipment?._id}>
              <td>{idx + 1}</td>
              <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={equipment.image_url}
                      alt="Avatar Tailwind CSS Component"
                      className="object-cover object-center aspect-1/1 rounded-full shadow-lg border border-gray-200"
                    />
                    </div>
                  </div>
              </td>
              <td>
                {equipment?.item_name}
              </td>
              <td>{equipment.category}</td>
              <td className="">$ {equipment.price}</td>
              <td className="text-right">
                <Link to={`${equipment._id}`} className="ml-auto">
                  <button className="btn btn-sm btn-neutral ml-auto">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SportEquipmentsPage;
