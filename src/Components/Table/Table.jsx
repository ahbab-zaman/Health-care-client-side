import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaRegEye } from "react-icons/fa";

const Table = () => {
  const { category } = useParams();
  console.log(category);
  const axiosPublic = useAxiosPublic();
  const { data: medicineCategory = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/medicine/${category}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto px-8">
        <table className="table">
          {/* head */}
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
                <td>
                  <p className="">
                    <FaRegEye className="text-xl transform transition-transform duration-300 hover:scale-125"></FaRegEye>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
