import { useState, useEffect } from "react";
import { client } from "@/lib/sanityClient";

function useSanityData<T>(query: string, params?: Record<string, unknown>) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    client.fetch(query, params).then((res) => setData(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, JSON.stringify(params)]);

  return data;
}

export default useSanityData;
