import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {data : history, isLoading} = useQuery({
    queryKey : ["seller", user?.email],
    queryFn : async ()=>{
        const {data} = await axiosSecure.get(`sellerHistory/${user?.email}`)
        return data
    }
  })
  console.log(history)
  return <div></div>;
};

export default PaymentHistory;
