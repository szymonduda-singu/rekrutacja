// 1. Uzupełnij dependency array.
// 2. Czy da się zmniejszyć liczbę renderów?
// 3. Co jeśli getCondition zwraca Promise?

import { useState, useEffect } from "react";

const useExample = () => {
  const condition = getCondition();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (condition) {
      setEnabled(true)
    }
  }, [])
  // exhaustive-deps
}