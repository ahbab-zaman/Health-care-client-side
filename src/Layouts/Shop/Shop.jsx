import { Link } from "react-router-dom";
import useMedicine from "../../Hooks/useMedicine";
import { FaRegEye } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const Shop = () => {
  const [medicine] = useMedicine();
  let [isOpen, setIsOpen] = useState(false);

  function open(id) {
    console.log(id);
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
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
                <td onClick={() => open(item._id)}>
                  <p className="">
                    <FaRegEye className="text-xl transform transition-transform duration-300 hover:scale-125"></FaRegEye>
                  </p>
                </td>
                <td>
                  <p className="">
                    <BiSelectMultiple className="text-xl transform transition-transform duration-300 hover:scale-125"></BiSelectMultiple>
                  </p>
                </td>
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
                        className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                      >
                        <DialogTitle
                          as="h3"
                          className="text-base/7 font-medium text-white"
                        >
                          Payment successful
                        </DialogTitle>
                        <p className="mt-2 text-sm/6 text-white/50">
                          Your payment has been successfully submitted. We’ve
                          sent you an email with all of the details of your
                          order.
                        </p>
                        <div className="mt-4">
                          <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={close}
                          >
                            Got it, thanks!
                          </Button>
                        </div>
                      </DialogPanel>
                    </div>
                  </div>
                </Dialog>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;
