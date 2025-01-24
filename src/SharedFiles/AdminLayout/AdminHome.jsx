import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Title from "../../Components/Title/Title";
import pay from "../../assets/pay.png";
import pending from "../../assets/clock.png";
import seller from "../../assets/agent.png";
import user from "../../assets/users.png";
import { Helmet } from "react-helmet-async";
const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allPendingSales = {}, isLoading } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/sales/pending`);
      return data;
    },
  });
  const { data: allPaidSales = {} } = useQuery({
    queryKey: ["paid"],
    queryFn: async () => {
      const { data } = await axiosSecure("/salesPaid/paid");
      return data;
    },
  });
  const { totalPendingPrice } = allPendingSales;
  const { totalPaidPrice, totalUser, totalSeller } = allPaidSales;
  console.log(totalPendingPrice, totalPaidPrice);
  return (
    <div>
      <Title title="Total Revenue"></Title>
      <Helmet>
        <title>Dashboard | Admin Home</title>
      </Helmet>
      <div className="stats shadow w-full bg-[#f2f3f5]">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <img className="w-10 h-10" src={pay} alt="" />
          </div>
          <div className="stat-title">Paid Revenue</div>
          <div className="stat-value">${totalPaidPrice}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img className="w-10 h-10" src={pending} alt="" />
          </div>
          <div className="stat-title">Pending Revenue</div>
          <div className="stat-value">${totalPendingPrice}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img className="w-10 h-10" src={seller} alt="" />
          </div>
          <div className="stat-title">Total Seller</div>
          <div className="stat-value">{totalSeller}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img className="w-10 h-10" src={user} alt="" />
          </div>
          <div className="stat-title">Total User</div>
          <div className="stat-value">{totalUser}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
