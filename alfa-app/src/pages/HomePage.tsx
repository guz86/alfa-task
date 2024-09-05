import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/products">Go to Breeds Page</Link>
    </div>
  );
};

export default HomePage;