import { useCallback, useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [on, setOn] = useState(defaultValue);
  const toggleOn = useCallback(() => setOn(true), []);
  const toggleOff = useCallback(() => setOn(false), []);

  return { on, toggleOff, toggleOn };
};

export default useToggle;
