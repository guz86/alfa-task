import { ErrorProps } from "../interfaces";

const ErrorComponent = ({ message }: ErrorProps) => {
  return <p>{message}</p>;
};

export default ErrorComponent;
