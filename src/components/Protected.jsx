import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  if (!user) {
    return navigate("/");
  }

  return children;
};

export default Protected;
