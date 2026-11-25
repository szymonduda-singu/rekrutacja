// 1. Oceń kod, zaproponuj zmiany.
// 2. Co się stanie jeśli użytkownik opuści stronę zanim upłyną 2 sekundy?

import { useState, useEffect } from "react";

const StateInTimeout = () => {
  const [finished, setFinished] = useState<boolean>(false);
  const timeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    timeout = setTimeout(() => {
      setFinished(true)
    }, 2000);

    // return () => timeout && clearTimeout(timeout)
  }, [])

  return null
}


// <StateInTimeout />
// nawigacja na inną stronę