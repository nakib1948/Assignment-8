import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <button className="btn btn-outline btn-primary mb-2">
            <Link to="/income"> Go to Income Page</Link>
          </button>
          <button className="btn btn-outline btn-secondary">
            <Link to="/expense"> Go to Expense Page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
