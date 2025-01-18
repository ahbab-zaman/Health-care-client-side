import { Link } from "react-router-dom";
import useMedicine from "../../Hooks/useMedicine";
import { FaRegEye } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { useState } from "react";
import dollar from "../../assets/dollars.png";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { toast, Zoom } from "react-toastify";
import { BsCart3 } from "react-icons/bs";

const Shop = () => {
  const [medicine] = useMedicine();
  const [selectedData, setSelectedData] = useState(null);
  const { user } = useAuth();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const handleViewDetails = (item) => {
    setSelectedData(item);
    const modal = document.getElementById("my_modal");
    modal.showModal();
  };

  const handleAddToCart = (medicine) => {
    console.log(medicine);
    if (user && user?.email) {
      const cartItem = {
        cartId: medicine._id,
        email: user?.email,
        name: medicine.name,
        category: medicine.category_name,
        price: medicine.price,
        image: medicine.image,
      };

      axiosSecure.post("/addCart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast("🛒 Cart Added Successfully", {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }
        refetch();
      });
    } else {
      
    }
  };
  console.log(medicine);
  return (
    <div>
      <div className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-auto bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="text-5xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/shop"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Shop
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto my-8">
        <table className="table">
          <thead>
            <tr>
              <th className="text-lg">Image</th>
              <th className="text-lg">Category</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Action</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicine.map((item) => (
              <tr item={item} key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold p-1 px-2 bg-[#EFEDF2] inline rounded-full text-sm text-[#4E97FD]">
                    {item.category_name}
                  </p>
                </td>
                <td className="font-semibold text-base">$ {item.price}.00</td>
                <td onClick={() => handleViewDetails(item)}>
                  <p>
                    <FaRegEye className="text-xl transform transition-transform duration-300 hover:scale-125"></FaRegEye>
                  </p>
                </td>
                <td onClick={() => handleAddToCart(item)}>
                  <p className="">
                    <BiSelectMultiple className="text-xl transform transition-transform duration-300 hover:scale-125"></BiSelectMultiple>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
          {selectedData ? (
            <div className="modal-box">
              <img src={selectedData.image} alt="" />
              <h3 className="font-bold text-lg">{selectedData.name}</h3>
              <div className="py-2">
                <p className="font-bold py-1 px-2 bg-[#EFEDF2] inline rounded-full text-lg text-[#4E97FD]">
                  {selectedData.category_name}
                </p>
              </div>
              <p className="py-2 text-gray-500">{selectedData.description}</p>
              <p className="py-2 text-xl font-semibold flex items-center">
                ${selectedData.price}.00
                <img className="w-6" src={dollar} alt="" />
              </p>

              <div className="modal-action ">
                <form method="dialog" className="w-full">
                  <button className="btn bg-[#4E97FD] font-bold text-white w-full">
                    Back
                  </button>
                </form>
              </div>
            </div>
          ) : (
            ""
          )}
        </dialog>
      </div>
    </div>
  );
};

export default Shop;
