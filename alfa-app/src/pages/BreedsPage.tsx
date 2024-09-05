import BreedList from "../components/BreedList/BreedList";
import BreedFilter from "../components/BreedFilter/BreedFilter";
import DataLoader from "../components/DataLoader";
import { useStore } from "../store/useStore";
import AddProductButton from "../components/AddProductButton/AddProductButton";

function BreedsPage() {
  const { breeds, images } = useStore();

  return (
    <>
      <h1>Dog Breeds</h1>
      <div>
        <BreedFilter />
        <AddProductButton />
      </div>
      <DataLoader />
      {breeds && images && Object.keys(images).length > 0 ? (
        <BreedList breeds={breeds} images={images} />
      ) : (
        <p>No breeds available or images not loaded.</p>
      )}
    </>
  );
}

export default BreedsPage;
