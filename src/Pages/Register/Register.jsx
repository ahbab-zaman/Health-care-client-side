import { Link } from "react-router-dom";
import googleImg from "../../assets/signIn.png";

const Register = () => {
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
            to="/register"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      <div className="bg-[#EEF7FC] w-3/4 mx-auto p-6 my-12">
        <h1 className="text-3xl font-semibold text-center">Sign Up</h1>
        <div>
          <p className="text-[#333333] font-light py-4 text-center">
            Already Have an Account?{" "}
            <Link to="/login" className="font-semibold text-[#4E97FD]">
              Login
            </Link>
          </p>
        </div>
        <div>
          <div className="hero">
            <div className="hero-content w-[100%]">
              <div className="card w-full">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Your Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Create Your Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="Your Password"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="flex justify-between items-center mt-6 gap-4">
                    <div className="w-full">
                      <select className="select select-bordered w-full rounded-full font-semibold">
                        <option  disabled selected>
                          Select Your Role
                        </option>
                        <option className="font-semibold">User</option>
                        <option className="font-semibold">Seller</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-info w-full text-center rounded-full"
                      />
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <button className="px-4 py-3 bg-[#4E97FD] text-[#fff] font-bold w-[15%] m-auto">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="divider -mt-4 mb-4 w-[90%] mx-auto font-bold">OR</div>
          <div className="flex justify-between items-center w-[90%] mx-auto border p-3 rounded-full bg-white">
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

export default Register;
