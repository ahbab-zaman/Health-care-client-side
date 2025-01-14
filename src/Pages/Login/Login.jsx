import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-auto bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="text-5xl font-semibold text-[#ffffffe1] space-x-4">
          <Link to="/" className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300">Home</Link> |<Link to="/Login" className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300">Login</Link>
        </div>
      </div>
      <div className="bg-[#EEF7FC] w-3/4 mx-auto p-6 my-12">
        <h1 className="text-3xl font-semibold text-center">Sign In</h1>
        <div>
          <div className="hero">
            <div className="hero-content w-[100%]">
              <div className="card w-full">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">Enter Your Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered rounded-none"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">Enter Your Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered rounded-none"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="px-4 py-3 bg-[#4E97FD] text-[#fff] font-bold w-[15%] m-auto">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
