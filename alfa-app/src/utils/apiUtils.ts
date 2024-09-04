import axios from "axios";
import { API_URLS } from "../constants";
import { BreedListType } from "../interfaces";

export const fetchDogBreeds = async (): Promise<BreedListType> => {
  try {
    const response = await axios.get(API_URLS.DOG_BREEDS_LIST);
    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
