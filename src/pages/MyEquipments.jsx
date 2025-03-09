import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const MyEquipments = () => {
  const [productsByEmail, setProductsByEmail] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(productsByEmail);

  useEffect(() => {
    fetch(
      `https://sport-equipment-store-server.vercel.app/productsByUser?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((result) => setProductsByEmail(result))
      .catch((err) => console.log(err));
  }, [user.email]);

  const handleUpdate = (id) => {
    console.log("update btn clicked", id);
  };

  const handleDelete = (id) => {
    console.log("delete btn clicked", id);
    fetch(`https://sport-equipment-store-server.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast.success(`The item with id ${id} is deleted successfully.`);
          setProductsByEmail(productsByEmail.filter((prd) => prd._id !== id));
        }
      });
  };

  return (
    <>
      <Toaster />
      <div className="my-8 grid grid-cols-3 gap-3">
        {productsByEmail?.map((product) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={product?.image_url}
                alt="product"
                className="aspect-3/2 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product?.item_name}
                <div className="badge badge-secondary text-white">
                  $ {product?.price}
                </div>
              </h2>
              <p>{product?.description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn"
                  onClick={() => handleUpdate(product?._id)}
                >
                  Update
                </button>
                <button
                  className="btn"
                  onClick={() => handleDelete(product?._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyEquipments;
