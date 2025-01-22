import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Title from "../../Components/Title/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import { toast } from "react-toastify";
import useCategory from "../../Hooks/useCategory";
import Loading from "../../Components/Loading/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageCategory = () => {
  const axiosSecure = useAxiosSecure();
  const [category, isLoading, refetch] = useCategory();
  let [isOpen, setIsOpen] = useState(false);
  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const quantity = parseInt(form.quantity.value);
    const categoryInfo = {
      name: name,
      image: image,
      quantity: quantity,
    };

    axiosSecure.post("/addCategory", categoryInfo).then((res) => {
      if (res.data.insertedId) {
        toast("New Category Added");
        refetch();
        console.log(res.data);
      }
    });
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
        axiosSecure.delete(`/category/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Title title="Manage Category"></Title>
      <div className="flex justify-end items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
        >
          Add Category
        </button>
      </div>

      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-[#F2F3F5]">
                <th>Image</th>
                <th>Quantity</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((item) => (
                <tr item={item} key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="Category Image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-bold">{item.quantity} Pieces</p>
                  </td>
                  <th className="text-xl">
                    <Link to={`/dashboard/update/${item._id}`}>
                      <FaEdit></FaEdit>
                    </Link>
                  </th>
                  <th className="text-xl">
                    <FaTrash onClick={() => handleDelete(item._id)}></FaTrash>
                  </th>
                  {/* <UpdateModal
                    item={item}
                    open={open}
                    setOpen={setOpen}
                    refetch={refetch}
                  ></UpdateModal> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl max-h-fit rounded-xl bg-[#bdbdbf] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <form className="card-body" onSubmit={handleAddCategory}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter Category Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Category"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter Category Image URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="Your Category Image"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter Category Quantity
                    </span>
                  </label>
                  <input
                    type="num,ber"
                    name="quantity"
                    placeholder="Your Category Quantity"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ManageCategory;
