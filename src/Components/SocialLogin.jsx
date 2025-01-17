import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import googleImg from "../assets/signIn.png";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // const user = (res.user = user);
        // const userInfo = {
        //   name: res.user.displayName,
        //   email: res.user.email,
        // };
        console.log(res.data);
        navigate("/");
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
