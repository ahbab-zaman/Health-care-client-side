import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import googleImg from "../assets/signIn.png";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          name: res.user?.displayName,
          image: res.user?.photoURL,
          email: res.user?.email,
          role: "user",
        };
        console.log(userInfo);
        axiosPublic.post("/addUser", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
          toast("🙍🏻‍♂️ User Login Successfully");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex justify-between items-center w-[90%] mx-auto border p-3 rounded-full "
    >
      <div>
        <img className="w-8" src={googleImg} alt="" />
      </div>
      <div className=" text-lg font-bold">Login With Google</div>
      <div></div>
    </div>
  );
};

export default SocialLogin;
