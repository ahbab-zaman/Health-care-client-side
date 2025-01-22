import { useQuery } from "@tanstack/react-query";
import Title from "../../Components/Title/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import Status from "../../Components/Status/Status";

const PaymentManagement = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: payment = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const { data } = await axiosSecure("/paymentInfo");
      console.log(data);
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Title title="title management"></Title>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item) => (
                <tr key={item._id} item={item}>
                  <th>{item.email}</th>
                  <th>{item.transactionId}</th>
                  <th>${item.price}</th>
                  <th>{item.status}</th>
                  <th>
                    <Status item={item} refetch={refetch}></Status>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;
