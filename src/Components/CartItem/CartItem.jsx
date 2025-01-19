import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const CartItem = ({ item, quantityPrice, setQuantityPrice }) => {
  const { _id, image, name, price } = item;
  const [, refetch] = useCart();
  const [quantity, setQuantity] = useState(1);
  const axiosSecure = useAxiosSecure();
  const increment = () => {
    setQuantity((prev) => prev + 1);
    setQuantityPrice(quantityPrice + price);
  };
  const decrement = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
    setQuantityPrice(quantityPrice - price);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="flex justify-around items-center border-b">
      <button onClick={() => handleDelete(_id)}>
        <RxCross1 className="text-lg text-gray-500"></RxCross1>
      </button>
      <img className="w-16" src={image} alt="" />
      <h3 className="text-lg font-semibold text-gray-500">{name}</h3>
      <p className="font-semibold">$ {price}</p>
      <div className="flex items-center justify-center space-x-4 border rounded-full px-4 py-2 shadow-sm bg-white">
        <button
          onClick={decrement}
          className="text-gray-600 text-lg font-semibold hover:text-gray-900 focus:outline-none"
          disabled={quantity <= 0}
        >
          -
        </button>
        <span className="text-gray-800 text-lg font-medium">{quantity}</span>
        <button
          onClick={increment}
          className="text-gray-600 text-lg font-semibold hover:text-gray-900 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
