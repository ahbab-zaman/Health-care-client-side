import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Title from "../../Components/Title/Title";
import { Helmet } from "react-helmet-async";

const UserHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: history = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userHistory", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/userPayment/${user?.email}`);
      return data;
    },
  });
  console.log(history);
  return (
    <div>
      <Title title="user payment history"></Title>
      <Helmet>
        <title>Dashboard | User Pay History</title>
      </Helmet>
      <div>
        {history.length === 0 ? (
          <h2 className="text-2xl font-bold h-[200px] flex justify-center items-center">
            No Payment History
          </h2>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>User Email</th>
                  <th>Transaction ID</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr item={item} key={item._id}>
                    <th>{item.email}</th>
                    <th>{item.transactionId}</th>
                    <th>$ {item.price}</th>
                    <th>{item.status}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserHistory;
