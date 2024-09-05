import { BreedListProps } from "../../interfaces";
import styles from "./BreedList.module.css";

const BreedList = ({ breeds, images }: BreedListProps) => {
  return (
    <div className={styles.breedListContainer}>
      {breeds &&
        breeds.map((breedName) => (
          <div key={breedName} className={styles.breedCard}>
            <h2>{breedName}</h2>
            {images && images[breedName] && (
              <img
                src={images[breedName]}
                alt={breedName}
                className={styles.breedImage}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default BreedList;
