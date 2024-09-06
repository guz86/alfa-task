import { useNavigate } from "react-router-dom";
import styles from "./AddProductButton.module.css";

const AddProductButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-product");
  };

  return (
    <button onClick={handleClick} className={styles.addButton}>
      Add Breed
    </button>
  );
};

export default AddProductButton;
