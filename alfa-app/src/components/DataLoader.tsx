import { useEffect } from "react";
import { useStore } from "../store/useStore";
import { BreedImage, BreedListType } from "../interfaces";
import { fetchDogBreeds, fetchRandomImageBreed } from "../utils/apiUtils";

const DataLoader: React.FC = () => {
  const { setBreeds, setImages, dataLoaded, markDataAsLoaded } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: BreedListType = await fetchDogBreeds();
        const firstBreeds: string[] = Object.keys(data).slice(0, 12);

        setBreeds(firstBreeds);

        const breedImageRequests = firstBreeds.map((breed) =>
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

        setImages(imageMap);
        markDataAsLoaded();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!dataLoaded) {
      fetchData();
    }
  }, [dataLoaded, setBreeds, setImages, markDataAsLoaded]);

  return null;
};

export default DataLoader;
