import Navbar from "../features/navbar/Navbar";
import { Posts } from "../features/posts/components/Posts";

const Home = () => {
  return (
    <div className="">
      <Navbar>
        <Posts />
      </Navbar>
    </div>
  );
};
export default Home;
