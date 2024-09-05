import { FaHeart, FaTrash } from "react-icons/fa";
import styles from "./BreedCard.module.css";
import { BreedCardProps } from "../../interfaces";
import { useStore } from "../../store/useStore";

const BreedCard: React.FC<BreedCardProps> = ({ breedName, imageUrl }) => {
  const { likedBreeds, toggleLike, removeBreed } = useStore();
  const isLiked = likedBreeds.has(breedName);

  const handleLike = () => {
    toggleLike(breedName);
  };

  const handleDelete = () => {
    removeBreed(breedName);
  };

  return (
    <div className={styles.breedCard}>
      <h2 className={styles.beedTitle}>{breedName}</h2>
      {imageUrl && (
        <img src={imageUrl} alt={breedName} className={styles.breedImage} />
      )}
      <div className={styles.iconContainer}>
        <div
          className={`${styles.likeIcon} ${isLiked ? styles.liked : ""}`}
          onClick={handleLike}
        >
          <FaHeart />
        </div>
        <div className={styles.deleteIcon} onClick={handleDelete}>
          <FaTrash />
        </div>
      </div>
    </div>
  );
};

export default BreedCard;
