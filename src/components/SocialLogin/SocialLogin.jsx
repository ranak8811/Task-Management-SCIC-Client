import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { saveUserToDatabase } from "../../api/utils";

const SocialLogin = () => {
  const { loginUsingGoogle, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const data = await loginUsingGoogle();
      // save user information in db if user is new
      await saveUserToDatabase(data?.user);
      setUser(data?.user);
      toast.success("Signup using google Successful");
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center mt-3">
      <div className="divider"></div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full py-2 border rounded-lg bg-[#43cbc3] text-white hover:bg-[#36a39a] transition px-4"
        >
          <FaGoogle className="text-xl mr-2" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
