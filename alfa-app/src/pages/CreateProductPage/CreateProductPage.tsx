import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CreateProductPage.module.css";
import { useStore } from "../../store/useStore";

const CreateProductPage: React.FC = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState<{ name?: string; imageUrl?: string }>(
    {}
  );
  const { addBreed } = useStore();
  const navigate = useNavigate();

  const isValidImageUrl = (url: string) => /\.(jpg|jpeg|png|gif)$/i.test(url);

  const validateForm = () => {
    const newErrors: { name?: string; imageUrl?: string } = {};
    if (!name) newErrors.name = "Name is required";
    else if (!/^[А-ЯA-Z]/.test(name))
      newErrors.name = "Name must start with a capital letter";

    if (!imageUrl) newErrors.imageUrl = "Image URL is required";
    else if (!isValidImageUrl(imageUrl))
      newErrors.imageUrl = "Invalid image URL";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    addBreed(name, imageUrl);
    navigate("/products");
  };

  return (
    <div className={styles.createProductPage}>
      <Link to="/products">Go to Breeds Page</Link>

      <h1>Create New Breed</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className={styles.input}
          />
          {errors.imageUrl && (
            <span className={styles.error}>{errors.imageUrl}</span>
          )}
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Breed
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
