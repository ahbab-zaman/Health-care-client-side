import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: history, isLoading } = useQuery({
    queryKey: ["seller", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`sellerHistory/${user?.email}`);
      return data;
    },
  });
  console.log(history);
  return (
    <div>
      <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>
    </div>
  );
};

export default PaymentHistory;
