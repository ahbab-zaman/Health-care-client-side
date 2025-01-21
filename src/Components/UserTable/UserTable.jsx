import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserTable = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { email, name, role, image, status } = user || "";
  const [selected, setSelected] = useState(role);
  console.log(selected);

  const handleUpdate = async (event) => {
    if (role === event) return;
    try {
      const { data } = await axiosSecure.patch(`/user/role/${email}`, {
        role: event,
      });
      console.log(data);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">{role}</td>
      <td>{status ? status : "Unverified"}</td>
      <th className="w-[220px]">
        <select
          onChange={() => handleUpdate(setSelected(event.target.value))}
          value={selected}
          className="select select-accent w-full"
        >
          <option disabled>Update Role</option>
          <option value="admin">admin</option>
          <option value="seller">seller</option>
          <option value="user">user</option>
          <button>Update</button>
        </select>
      </th>
    </tr>
  );
};

export default UserTable;
