import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./BreedCard.module.css";

interface BreedCardProps {
  breedName: string;
  imageUrl?: string;
}

const BreedCard: React.FC<BreedCardProps> = ({ breedName, imageUrl }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
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
