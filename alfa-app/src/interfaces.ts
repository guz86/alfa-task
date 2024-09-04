export interface BreedListType {
  [key: string]: string[];
}

export interface BreedListProps {
  breeds: BreedListType;
}

export interface ErrorProps {
  message: string;
}
