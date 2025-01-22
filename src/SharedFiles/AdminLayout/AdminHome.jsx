import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allSales = {}, isLoading } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/sales/pending`);
      return data;
    },
  });
  const { totalPrice } = allSales;
  console.log(totalPrice);
  return <div></div>;
};

export default AdminHome;
