import styles from "./BreedFilter.module.css";
import { useStore } from "../../store/useStore";

const BreedFilter: React.FC = () => {
  const { filter, setFilter } = useStore();

  return (
    <div className={styles.filterContainer}>
      <button
        className={filter === "all" ? styles.activeButton : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "liked" ? styles.activeButton : ""}
        onClick={() => setFilter("liked")}
      >
        Liked
      </button>
    </div>
  );
};

export default BreedFilter;
