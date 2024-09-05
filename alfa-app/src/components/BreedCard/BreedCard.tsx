import { FaHeart } from "react-icons/fa";
import styles from "./BreedCard.module.css";
import { BreedCardProps } from "../../interfaces";
import { useStore } from "../../store/useStore";

const BreedCard: React.FC<BreedCardProps> = ({ breedName, imageUrl }) => {
  const { likedBreeds, toggleLike } = useStore();
  const isLiked = likedBreeds.has(breedName);

  const handleLike = () => {
    toggleLike(breedName);
  };

  return (
    <div className={styles.breedCard}>
      <h2 className={styles.beedTitle}>{breedName}</h2>
      {imageUrl && (
        <img src={imageUrl} alt={breedName} className={styles.breedImage} />
      )}
      <div
        className={`${styles.likeIcon} ${isLiked ? styles.liked : ""}`}
        onClick={handleLike}
      >
        <FaHeart />
      </div>
    </div>
  );
};

export default BreedCard;
