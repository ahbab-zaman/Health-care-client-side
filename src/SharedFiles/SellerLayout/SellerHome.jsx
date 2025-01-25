import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SellerHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allPendingSale = {}, isLoading } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/sale/pending`);
      return data;
    },
  });
  const { data: allPaidSale = {} } = useQuery({
    queryKey: ["paid"],
    queryFn: async () => {
      const { data } = await axiosSecure("/salesPaid/paid");
      return data;
    },
  });

  const { totalPendingSale } = allPendingSale;
  const { totalSeller, totalUser, totalPaidSale } = allPaidSale;

  return (
    <div>
      <Helmet>
        <title>Dashboard | Seller Home</title>
      </Helmet>
    </div>
  );
};

export default SellerHome;
