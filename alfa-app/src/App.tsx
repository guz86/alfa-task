import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface BreedList {
  [key: string]: string[];
}

function App() {
  const url = "https://dog.ceo/api/breeds/list/all";
  const [breeds, SetBreeds] = useState<BreedList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        SetBreeds(response.data.message);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        console.error("Error fetching data:", error);
        setError("Error loading breeds");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Products</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {breeds &&
            Object.keys(breeds).map((breedName) => (
              <li key={breedName}>{breedName}</li>
            ))}
        </ul>
      )}
    </>
  );
}

export default App;
