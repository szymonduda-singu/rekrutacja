// 1. Oceń kod, zaproponuj zmiany.
// 2. Co się stanie jeśli użytkownik opuści stronę zanim upłyną 2 sekundy?

import { useState, useEffect } from "react";

const StateInTimeout = () => {
  const [finished, setFinished] = useState(false);
  const timeout = null;

  useEffect(() => {
    timeout = setTimeout(() => {
      setFinished(true)
    }, 2000);
  }, [])

  return null
}
