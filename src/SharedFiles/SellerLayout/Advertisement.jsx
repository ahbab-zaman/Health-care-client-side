import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import Title from "../../Components/Title/Title";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";

const Advertisement = () => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const {
    data: banners = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const { data } = await axiosSecure("/allBanner");
      return data;
    },
  });

  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;
    const bannerInfo = {
      name: name,
      image: image,
      description: description,
      status: "pending",
      sellerEmail: user?.email,
    };
    axiosSecure.post("/addBanner", bannerInfo).then((res) => {
      if (res.data.insertedId) {
        toast("New Banner Added");
        refetch();
      }
    });
  };

  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Title title="ask advertise banner"></Title>
      <div className="flex justify-end items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
        >
          Ask for Advertisement
        </button>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Banner</th>
                <th>Seller Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((item) => (
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
                  <th>{item.email}</th>
                  <th>{item.status}</th>
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
                <form className="card-body" onSubmit={handleAddCategory}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Item Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Banner Name"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Image URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="image"
                      placeholder="Your Image URL"
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
                      type="text"
                      name="description"
                      placeholder="Your Banner Description"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
                    >
                      Send Request
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

export default Advertisement;
