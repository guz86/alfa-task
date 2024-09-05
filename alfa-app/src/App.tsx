import { useEffect, useState } from "react";
import "./App.css";
import { fetchDogBreeds, fetchRandomImageBreed } from "./utils/apiUtils";
import { BreedImage, BreedListType } from "./interfaces";
import Loading from "./components/Loading";
import BreedList from "./components/BreedList/BreedList";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [breeds, setBreeds] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [breedImages, setBreedImages] = useState<Record<string, string> | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: BreedListType = await fetchDogBreeds();

        const first10Breeds: string[] = Object.keys(data).slice(0, 10);
        setBreeds(first10Breeds);

        const breedImageRequests = first10Breeds.map((breed) =>
          fetchRandomImageBreed(breed).then((response: BreedImage) => ({
            breed,
            imageUrl: response.message,
          }))
        );

        const imageResults = await Promise.all(breedImageRequests);

        const imageMap = imageResults.reduce<Record<string, string>>(
          (acc, { breed, imageUrl }) => {
            acc[breed] = imageUrl;
            return acc;
          },
          {}
        );
        setBreedImages(imageMap);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Dog Breeds</h1>

      {isLoading && <Loading />}
      {error && <ErrorComponent message={error} />}
      {breeds && breedImages && !isLoading && !error && (
        <BreedList breeds={breeds} images={breedImages} />
      )}
    </>
  );
}

export default App;
