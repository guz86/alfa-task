
import React from 'react';
import { BreedListProps } from "../../interfaces";
import BreedCard from '../BreedCard/BreedCard';
import styles from "./BreedList.module.css";

const BreedList: React.FC<BreedListProps> = ({ breeds, images }: BreedListProps) => {
  return (
    <div className={styles.breedListContainer}>
      {breeds &&
        breeds.map((breedName) => (
          <BreedCard
            key={breedName}
            breedName={breedName}
            imageUrl={images && images[breedName]}
          />
        ))}
    </div>
  );
};

export default BreedList;
