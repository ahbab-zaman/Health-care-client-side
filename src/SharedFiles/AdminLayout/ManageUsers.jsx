import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Title from "../../Components/Title/Title";
import UserTable from "../../Components/UserTable/UserTable";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allUsers/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  if (loading) return <Loading></Loading>;
  console.log(users);
  return (
    <div>
      <Title title="Manage Users"></Title>
      <Helmet>
        <title>Dashboard |Manage Users</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Users</th>
                <th>Role</th>
                <th>Update Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserTable
                  user={user}
                  key={user._id}
                  refetch={refetch}
                ></UserTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
