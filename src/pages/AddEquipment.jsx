import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    fetch("https://sport-equipment-store-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        user: { name: user?.displayName, email: user?.email },
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId)
          toast.success(
            `An item with id ${result.insertedId} is added to the database`
          );
      })
      .catch((err) => console.log(err));
    console.log(JSON.stringify(formData));
  };

  return (
    <div className="mx-auto my-8 p-8 w-1/2 flex flex-col gap-5 items-center border border-gray-300 rounded-xl">
      <h2 className="text-4xl font-semibold text-center">Add Equipment</h2>
      <form
        onSubmit={handleAddEquipment}
        className="flex flex-col gap-4 w-full mx-auto"
      >
        <input
          type="text"
          name="item_name"
          placeholder="Item Name"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="category"
          placeholder="Equipment Category"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="customization"
          placeholder="Customization"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="processing_time"
          placeholder="Processing Time"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="stock"
          placeholder="Stock Status"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <button className="btn">Add Item</button>
      </form>
    </div>
  );
};

export default AddEquipment;
