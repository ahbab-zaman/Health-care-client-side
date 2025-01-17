import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import googleImg from "../../assets/signIn.png";
const Login = () => {
  const { userLogin, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, rest } = useForm();
  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-auto bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="text-5xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/login"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="bg-[#EEF7FC] w-3/4 mx-auto p-6 my-12">
        <h1 className="text-3xl font-semibold text-center">Sign In</h1>
        <div>
          <p className="text-[#333333] font-light py-4 text-center">
            New to this account?{" "}
            <Link to="/register" className="font-semibold text-[#4E97FD]">
              Register
            </Link>
          </p>
        </div>
        <div>
          <div className="hero">
            <div className="hero-content w-[100%]">
              <div className="card w-full">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Your Email
                      </span>
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Your Password
                      </span>
                    </label>
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="Your Password"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="px-4 py-3 bg-[#4E97FD] text-[#fff] font-bold w-[15%] m-auto">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="divider -mt-4 mb-4 w-[90%] mx-auto font-bold">OR</div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-between items-center w-[90%] mx-auto border p-3 rounded-full bg-white"
          >
            <div>
              <img className="w-8" src={googleImg} alt="" />
            </div>
            <div className="text-[#333333] text-lg font-bold">
              Login With Google
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
