import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaRegEye } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { useState } from "react";
import dollar from "../../assets/dollars.png";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast, Zoom } from "react-toastify";
const Table = () => {
  const [selectedData, setSelectedData] = useState(null);
  const { category } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: medicineCategory = [], refetch } = useQuery({
    queryKey: ["category", user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/medicine/${category}`);
      return res.data;
    },
  });

  const handleViewDetails = (item) => {
    setSelectedData(item);
    const modal = document.getElementById("my_modal");
    modal.showModal();
    console.log("open");
  };

  const handleAddToCart = (medicine) => {
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
    }
  };

  return (
    <div>
      <div className="overflow-x-auto px-8">
        <table className="table">
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medicineCategory.map((item, idx) => (
              <tr
                item={item}
                key={item._id}
                className="hover:bg-gray-200 hover:transition-all hover:duration-300"
              >
                <th>{idx + 1}</th>
                <td>
                  <img className="w-11" src={item.image} alt="" />
                </td>
                <td>
                  <p className="font-bold p-1 px-2 text-[#EFEDF2] inline rounded-full text-sm bg-[#4E97FD]">
                    {item.name}
                  </p>
                </td>
                <td>
                  <p className="font-bold p-1 px-2 bg-[#EFEDF2] inline rounded-full text-sm text-[#4E97FD]">
                    {item.category_name}
                  </p>
                </td>
                <td onClick={() => handleViewDetails(item)}>
                  <p>
                    <FaRegEye className="text-xl transform transition-transform duration-300 hover:scale-125"></FaRegEye>
                  </p>
                </td>
                <td onClick={() => handleAddToCart(item)}>
                  <p>
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

export default Table;
