import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const SalesReport = () => {
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

  console.log(payment);
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title>Dashboard |Sales Report</title>
      </Helmet>
      <Title title="Sales Report"></Title>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item) => (
                <tr>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
