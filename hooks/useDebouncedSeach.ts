import { useEffect, useState } from "react";

type FilterFunction<T> = (item: T, query: string) => boolean;

export function useDebouncedSearch<T>(
  data: T[],
  query: string,
  filterFn: FilterFunction<T>,
  delay = 300
): T[] {
  const [filteredData, setFilteredData] = useState<T[]>(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!query) {
        setFilteredData(data);
      } else {
        const lowerQuery = query.toLowerCase();
        const result = data.filter((item) => filterFn(item, lowerQuery));
        setFilteredData(result);
      }
    }, delay);

    return () => clearTimeout(handler);
  }, [query, data, filterFn, delay]);

  return filteredData;
}
