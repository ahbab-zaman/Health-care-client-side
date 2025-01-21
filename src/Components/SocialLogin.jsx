import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import googleImg from "../assets/signIn.png";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          image: res.user.photoURL,
          email: res.user.email,
          role: "user",
        };
        axiosPublic.post("/addUser", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex justify-between items-center w-[90%] mx-auto border p-3 rounded-full bg-white"
    >
      <div>
        <img className="w-8" src={googleImg} alt="" />
      </div>
      <div className="text-[#333333] text-lg font-bold">Login With Google</div>
      <div></div>
    </div>
  );
};

export default SocialLogin;
