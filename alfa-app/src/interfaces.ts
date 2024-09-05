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
