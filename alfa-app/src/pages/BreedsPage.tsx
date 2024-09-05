import { useEffect, useState } from "react";
import BreedList from "../components/BreedList/BreedList";
import ErrorComponent from "../components/ErrorComponent";
import Loading from "../components/Loading";
import { BreedImage, BreedListType } from "../interfaces";
import { fetchDogBreeds, fetchRandomImageBreed } from "../utils/apiUtils";

function BreedsPage() {
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

        const first5Breeds: string[] = Object.keys(data).slice(0, 5);
        setBreeds(first5Breeds);

        const breedImageRequests = first5Breeds.map((breed) =>
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

export default BreedsPage;
