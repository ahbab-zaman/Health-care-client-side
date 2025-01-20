import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/logo1.png";

const Invoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: invoice = [] } = useQuery({
    queryKey: ["invoice", user?.email],
    queryFn: async () => {
      const res = axiosSecure.get(`/payment-invoice/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="w-11/12 mx-auto my-4">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-24 h-24 rounded-full" src={user?.photoURL} alt="" />
          <h2 className="text-lg font-semibold">Name: {user?.displayName}</h2>
          <h2 className="text-lg font-semibold">Email: {user?.email}</h2>
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-semibold">INVOICE</h2>
          <img className="w-16" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
