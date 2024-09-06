import styles from "./FormInput.module.css";

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  value,
  onChange,
  error,
}) => (
  <div className={styles.formGroup}>
    <label htmlFor={id}>{label}:</label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export default FormInput;
