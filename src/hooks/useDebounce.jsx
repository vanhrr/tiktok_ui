import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeOutHandler = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(timeOutHandler);
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;
