import { useEffect, useState } from "react";

export default function useFetch(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(path)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setTimeout(() => setLoading(false), 400); // Smooth fade
      });
  }, [path]);

  return { data, loading };
}
