import { useLoaderData, useParams } from "react-router-dom";
import useMedicine from "../../Hooks/useMedicine";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Table = () => {
  // const [medicine] = useMedicine();
  const { category } = useParams();
  console.log(category);
  // console.log(medicine)
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
      <h2>Category : {medicineCategory.length}</h2>
    </div>
  );
};

export default Table;
