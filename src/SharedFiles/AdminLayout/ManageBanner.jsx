import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Components/Loading/Loading";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Title from "../../Components/Title/Title";
import ToggleButtons from "../../Components/ToggleButtons/ToggleButtons";
import { Helmet } from "react-helmet-async";

const ManageBanner = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: banners = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const { data } = await axiosSecure("/allBanner");
      return data;
    },
  });
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Title title="manage banner advertise"></Title>
      <Helmet>
        <title>Dashboard | Manage Banner</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Banner</th>
                <th>Item Name</th>
                <th>Seller Email</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((item) => (
                <tr item={item} key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <th>{item.name}</th>
                  <th>{item.email}</th>
                  <th>{item.description.slice(0, 15)}...</th>
                  <th>{item.status}</th>
                  <th>
                    <ToggleButtons
                      item={item}
                      refetch={refetch}
                    ></ToggleButtons>
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

export default ManageBanner;
