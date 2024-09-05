import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import { BreedImage, BreedListType } from "../interfaces";
import { fetchDogBreeds, fetchRandomImageBreed } from "../utils/apiUtils";

const DataLoader: React.FC = () => {
  const { setBreeds, setImages } = useStore();

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

        setImages(imageMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default DataLoader;