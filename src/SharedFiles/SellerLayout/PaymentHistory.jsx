import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Loading from "../../Components/Loading/Loading";
import Title from "../../Components/Title/Title";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payment = [], isLoading } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const { data } = await axiosSecure("/sellerPayment");
      console.log(data);
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>

      <Title title="Seller payment history"></Title>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item) => (
                <tr key={item._id} item={item}>
                  <th>{item.email}</th>
                  <th>{item.transactionId}</th>
                  <th>${item.price}</th>
                  <th>{item.status}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
