import MyProfile from "../features/user/components/MyProfile";
import Navbar from "../features/navbar/Navbar";

const MyProfilePage = () => {
  return (
    <div>
      <Navbar>
        <MyProfile />
      </Navbar>
    </div>
  );
};
export default MyProfilePage;
