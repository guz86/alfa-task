import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/products" className={styles.link}>
        Go to Breeds Page
      </Link>
    </div>
  );
};

export default HomePage;
