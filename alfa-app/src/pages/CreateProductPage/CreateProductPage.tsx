import { Link, useNavigate } from "react-router-dom";
import styles from "./CreateProductPage.module.css";
import { useStore } from "../../store/useStore";
import CreateProductForm from "../../components/CreateProductForm/CreateProductForm";

const CreateProductPage: React.FC = () => {
  const { addBreed } = useStore();
  const navigate = useNavigate();

  const handleFormSubmit = (name: string, imageUrl: string) => {
    addBreed(name, imageUrl);
    navigate("/products");
  };

  return (
    <div className={styles.createProductPage}>
      <Link to="/products">Go to Breeds Page</Link>
      <h1>Create New Breed</h1>
      <CreateProductForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateProductPage;
