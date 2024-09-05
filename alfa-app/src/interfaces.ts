export interface BreedListType {
  [key: string]: string[];
}

export interface BreedListProps {
  breeds: string[];
  images: Record<string, string>;
}

export interface ErrorProps {
  message: string;
}

export interface BreedImage {
  message: string;
  status: string;
}

export interface BreedCardProps {
  breedName: string;
  imageUrl?: string;
}

export interface BreedState {
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
  addBreed: (name: string, imageUrl: string) => void;
}