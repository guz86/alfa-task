import { useEffect, useState } from "react";
import "./App.css";
import { fetchDogBreeds } from "./utils/apiUtils";
import { BreedListType } from "./interfaces";
import Loading from "./components/Loading";
import BreedList from "./components/BreedList";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [breeds, setBreeds] = useState<BreedListType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogBreeds();
        setBreeds(data);
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
      {breeds && !isLoading && !error && <BreedList breeds={breeds} />}
    </>
  );
}

export default App;
