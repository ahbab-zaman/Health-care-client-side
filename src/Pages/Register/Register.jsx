import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const imageApiKey = import.meta.env.VITE_IMAGE_API;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { createUser, profileUpdate } = useAuth();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const userInfo = {
      name: data.name,
      email: data.email,
      role: data.role,
      image: res.data.data.display_url,
    };
    console.log(userInfo);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        profileUpdate({
          displayName: data.name,
          photoURL: userInfo.image,
          email: data.email,
        })
          .then(() => {
            axiosPublic.post("/addUser", userInfo).then((res) => {
              if (res.data.insertedId) {
                toast("User Created Successfully");
                reset();
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
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
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-[#333333]">
                        Enter Your Name
                      </span>
                    </label>
                    <input
                      {...register("name", { required: true })}
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
                        Create Your Password
                      </span>
                    </label>
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Your Password"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>

                  <div className="flex justify-between items-center mt-6 gap-4">
                    <div className="w-full">
                      <select
                        {...register("role", { required: true })}
                        defaultValue={"default"}
                        className="select select-bordered w-full rounded-full font-semibold"
                      >
                        <option disabled value="default">
                          Select Your Role
                        </option>
                        <option className="font-semibold">User</option>
                        <option className="font-semibold">Seller</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <input
                        {...register("image", { required: true })}
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
        </div>
      </div>
    </div>
  );
};

export default Register;
