import { useEffect, useRef, useState } from "react";

export default function useFetching(api, query) {
  const [data, setData] = useState();
  const isMounted = useRef(true);
  const [loading, setLoading] = useState(false);
  const [pagingation, setPagination] = useState({
    page: 1,
    pageSize: 12,
    total: 100,
  });
  useEffect(() => {
    isMounted.current = true;
    const Controller = new AbortController();
    api()
      .then((res) => {
        if (isMounted.current) {
          let product = res.data;
          setData(product.data);
          if (product?.meta?.pagingation) {
            setPagination(product.meta.pag);
          }
        }
      })
      .catch((err) => {
        console.log("loi", err);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      Controller.abort();
      isMounted.current = false;
    };
  }, [query]);

  return { data, setData, pagingation, setPagination, loading };
}
