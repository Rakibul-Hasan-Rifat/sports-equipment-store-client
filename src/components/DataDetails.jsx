import { useState } from "react";
import { useParams } from "react-router";

const DataDetails = () => {
  const params = useParams();
  const [itemDetails, setItemDetails] = useState({});

  fetch(`http://localhost:2345/products/${params?.id}`)
    .then((res) => res.json())
    .then((result) => setItemDetails(result));

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-4 p-3 bg-gray-300 rounded-3xl">
      <img src={itemDetails.image_url} alt="" className="rounded-xl" />
      <h4 className="font-semibold text-2xl">{itemDetails.item_name}</h4>
      <p>Description: {itemDetails.description}</p>
      <p className="flex items-center justify-between my-2">
        <span className="bg-[#6dceb9a4] font-semibold px-4 rounded-xl">
          <small>{itemDetails.category}</small>
        </span>
        <span className="font-semibold bg-white rounded-xl px-4">
          $ {itemDetails.price}
        </span>
      </p>
      <p className="flex items-center justify-between my-2">
        <span>Stock: {itemDetails.stock}</span>
        <span>Rating: {itemDetails.rating} </span>
      </p>
    </div>
  );
};

export default DataDetails;
