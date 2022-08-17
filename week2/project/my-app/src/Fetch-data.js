import { useState, useEffect, useCallback } from "react";

const FetchData = (url, setData) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    setLoading(true);

    await fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url, setData]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  return { loading, error };
};
export default FetchData;
