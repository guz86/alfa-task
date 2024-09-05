import { Link, useParams } from "react-router-dom";
import styles from "./BreedDetail.module.css";
import { useStore } from "../../store/useStore";

const BreedDetail: React.FC = () => {
  const { breedName } = useParams<{ breedName: string }>();
  const { images } = useStore();

  return (
    <>
      <Link to="/products">Go to Breeds Page</Link>
      <div className={styles.detailContainer}>
        <h1 className={styles.detailTitle}>{breedName}</h1>
        {breedName && images[breedName] && (
          <img
            src={images[breedName]}
            alt={breedName}
            className={styles.breedImage}
          />
        )}
        <p>Details page {breedName}.</p>
      </div>
    </>
  );
};

export default BreedDetail;
