import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Components/SocialLogin";
const Login = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, rest } = useForm();
  const from = location?.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from);
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
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
