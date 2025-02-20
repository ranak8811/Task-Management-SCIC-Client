import SocialLogin from "../../components/SocialLogin/SocialLogin";
import loginLottieData from "../../assets/lottie/login.json";
import Lottie from "lottie-react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-68px)] bg-[#f8fdfd] px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Animation */}
        <div className="flex justify-center">
          <Lottie animationData={loginLottieData} loop className="w-60" />
        </div>

        {/* Login Form */}
        <h2 className="text-xl font-bold text-center text-[#040d0d]">Login</h2>
        <h3 className="text-center text-[#040d0d]">
          Only social login is available for now!
        </h3>
        <form className="mt-4 space-y-3">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#040d0d]">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
              placeholder="Enter email"
              disabled
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-[#040d0d]">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
              placeholder="Enter password"
              disabled
            />
          </div>

          {/* Social Login */}
        </form>
        <div className="mt-4">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
