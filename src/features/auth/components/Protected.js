import { useSelector } from "react-redux";
import { selectAllUsers, selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return children;
};
export default Protected;
