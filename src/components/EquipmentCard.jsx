import { Link } from "react-router";

const EquipmentCard = ({ equipment }) => {
  console.log(equipment.image_url);
    return (
      <div className={`p-4 rounded-xl shadow bg-gray-200`}>
        <img
          src={equipment.image_url}
          alt=""
          className="w-full object-cover object-center aspect-5/3 rounded-lg"
        />
        <h4 className="font-semibold text-xl my-2">{equipment.item_name}</h4>
        <p className="flex items-center justify-between my-3">
          <span className="bg-[#6dceb9a4] font-semibold px-4 rounded-xl">
            <small>{equipment.category}</small>
          </span>
          <span className="font-semibold bg-white rounded-xl px-4">$ {equipment.price}</span>
        </p>
        <Link to={`equipments/${equipment._id}`}>
          <button className="btn btn-neutral w-full">View Details</button>
        </Link>
      </div>
    );
};

export default EquipmentCard;
