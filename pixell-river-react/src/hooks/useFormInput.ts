import { useState } from "react";

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(e.target.value);
    if (error) setError(null);
  };

  const reset = () => {
    setValue(initialValue);
    setError(null);
  };

  return {
    value,
    error,
    onChange: handleChange,
    reset,
    setError,
  };
};
