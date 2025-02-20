import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>my home</h1>
      <h2>{user.displayName}</h2>
    </div>
  );
};

export default Home;
