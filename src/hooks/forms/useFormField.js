import { useState } from 'react';

export const useFormField = (initialValue = '', validators = []) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const newValue = e.target ? e.target.value : e;
    setValue(newValue);
    setError(null);
  };

  const onBlur = () => {
    for (const validator of validators) {
      const validationError = validator(value);
      if (validationError) {
        setError(validationError);
        return;
      }
    }
  };

  return {
    value,
    error,
    onChange,
    onBlur,
    setValue,
  };
};
