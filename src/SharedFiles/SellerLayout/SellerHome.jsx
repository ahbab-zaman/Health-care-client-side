import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import pay from "../../assets/pay.png";
import pending from "../../assets/clock.png";
import seller from "../../assets/agent.png";
import user from "../../assets/users.png";
import Title from "../../Components/Title/Title";

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
      const { data } = await axiosSecure("/salePaid/paid");
      return data;
    },
  });

  const { totalPaidPrice, totalSeller, totalUser } = allPaidSale;

  const { totalPendingPrice } = allPendingSale;
  console.log(totalPaidPrice, totalSeller, totalUser);
  return (
    <div>
      <Helmet>
        <title>Dashboard | Seller Home</title>
      </Helmet>
      <Title title="seller total revenue"></Title>
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

export default SellerHome;
