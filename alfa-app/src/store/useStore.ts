import { create } from "zustand";

interface BreedState {
  breeds: string[];
  images: Record<string, string>;
  likedBreeds: Set<string>;
  toggleLike: (breedName: string) => void;
  filter: "all" | "liked";
  setFilter: (filter: "all" | "liked") => void;
  setBreeds: (breeds: string[]) => void;
  setImages: (images: Record<string, string>) => void;
  removeBreed: (breedName: string) => void;
  markDataAsLoaded: () => void;
  dataLoaded: boolean;
}

export const useStore = create<BreedState>((set) => ({
  breeds: [],
  images: {},
  setBreeds: (breeds) => set({ breeds }),
  setImages: (images) => set({ images }),
  likedBreeds: new Set(),
  toggleLike: (breedName) =>
    set((state) => {
      const updatedLikes = new Set(state.likedBreeds);
      if (updatedLikes.has(breedName)) {
        updatedLikes.delete(breedName);
      } else {
        updatedLikes.add(breedName);
      }
      return { likedBreeds: updatedLikes };
    }),
  filter: "all",
  setFilter: (filter) => set({ filter }),
  removeBreed: (breedName) =>
    set((state) => ({
      breeds: state.breeds.filter((breed) => breed !== breedName),
      images: Object.fromEntries(
        Object.entries(state.images).filter(([key]) => key !== breedName)
      ),
      likedBreeds: new Set(
        [...state.likedBreeds].filter((likedBreed) => likedBreed !== breedName)
      ),
    })),
  dataLoaded: false,
  markDataAsLoaded: () => set({ dataLoaded: true }),
}));
