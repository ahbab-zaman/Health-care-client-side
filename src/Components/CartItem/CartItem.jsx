import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CartItem = ({ item, totalPrice, quantityPrice, setQuantityPrice }) => {
  const { _id, image, name, price } = item;
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity((prev) => prev + 1);
    setQuantityPrice(quantityPrice + price);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
    totalPrice - price;
  };

  const handleDelete = (id) => {
    console.log(id)
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
          disabled={quantity <= 1}
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
