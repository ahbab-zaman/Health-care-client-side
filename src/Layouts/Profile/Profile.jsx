import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <section className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-auto bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="text-5xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/profile"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Profile
          </Link>
        </div>
      </section>

      <section className="w-3/4 mx-auto border border-blue-500 rounded-xl my-12 py-12">
        <div className="flex justify-center items-center">
          <img className="w-40 h-40 rounded-full" src={user?.photoURL} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Profile;
