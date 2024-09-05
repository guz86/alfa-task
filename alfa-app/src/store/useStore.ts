import create from "zustand";

interface BreedState {
  likedBreeds: Set<string>;
  toggleLike: (breedName: string) => void;
}

export const useStore = create<BreedState>((set) => ({
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
}));
