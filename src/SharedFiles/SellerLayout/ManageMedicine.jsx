import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Title from "../../Components/Title/Title";
import useMedicine from "../../Hooks/useMedicine";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const imageApiKey = import.meta.env.VITE_IMAGE_API;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
const ManageMedicine = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [medicine, loading, refetch] = useMedicine();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const itemInfo = {
      name: data.name,
      generic: data.generic,
      image: res.data.data.display_url,
      description: data.description,
      category_name: data.category_name,
      company: data.company,
      unit: parseInt(data.unit),
      price: parseInt(data.price),
      discount: parseInt(data.discount),
      email: user?.email,
    };
    console.log(itemInfo);

    await axiosSecure.post("/addMedicine", itemInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast("💊 New Medicine Added Successfully");
      }
      refetch()
      reset();
    });
  };

  if (loading) return <Loading></Loading>;
  return (
    <div>
      <Title title="all medicine"></Title>

      <h2 className="text-4xl font-bold">Medicine: {medicine.length}</h2>

      <div className="flex justify-end items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
        >
          Add Medicine
        </button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {medicine.map((item) => (
                <tr key={item._id} item={item}>
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
                    </div>
                  </td>
                  <th>{item.name}</th>
                  <th>{item.category_name}</th>
                  <th>$ {item.price}</th>
                </tr>
              ))}
            </tbody>
          </table>
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
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Item Name
                      </span>
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Your Item Name"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Upload Image
                      </span>
                    </label>
                    <input
                      {...register("image", { required: true })}
                      type="file"
                      className="file-input file-input-bordered file-input-info w-full text-center rounded-full"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Generic Name
                      </span>
                    </label>
                    <input
                      {...register("generic", { required: true })}
                      type="text"
                      placeholder="Your Generic Name"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Description
                      </span>
                    </label>
                    <input
                      {...register("description", { required: true })}
                      type="text"
                      placeholder="Your Description"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="flex justify-between items-center gap-3">
                    <div className="w-full">
                      <select
                        {...register("category_name", { required: true })}
                        defaultValue={"default"}
                        className="select select-bordered rounded-full font-semibold w-full"
                      >
                        <option disabled value="default">
                          Select Category
                        </option>
                        <option className="font-semibold">Antibiotics</option>
                        <option className="font-semibold">Antivirals</option>
                        <option className="font-semibold">Diabetes</option>
                        <option className="font-semibold">Respiratory </option>
                        <option className="font-semibold">Vitamins</option>
                        <option className="font-semibold">
                          {" "}
                          Anti-Inflammatory
                        </option>
                      </select>
                    </div>
                    <div className="w-full">
                      <select
                        {...register("company", { required: true })}
                        defaultValue={"default"}
                        className="select select-bordered  rounded-full font-semibold w-full"
                      >
                        <option disabled value="default">
                          Select Company
                        </option>
                        <option className="font-semibold">Incepta</option>
                        <option className="font-semibold">Square</option>
                        <option className="font-semibold">Beximco</option>
                        <option className="font-semibold">Acme</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-3">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-semibold text-[#333333]">
                          Enter Item Unit
                        </span>
                      </label>
                      <input
                        {...register("unit", { required: true })}
                        type="number"
                        placeholder="Your Item Unit"
                        className="input input-bordered rounded-full"
                        required
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-semibold text-[#333333]">
                          Enter Item Price
                        </span>
                      </label>
                      <input
                        {...register("price", { required: true })}
                        type="number"
                        placeholder="Your Item Price"
                        className="input input-bordered rounded-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Discount
                      </span>
                    </label>
                    <input
                      {...register("discount", { required: true })}
                      type="number"
                      defaultValue={0}
                      placeholder="Your Item Price"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
                    >
                      Add Medicine
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default ManageMedicine;
