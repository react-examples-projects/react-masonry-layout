import { useState, useEffect } from "react";

export default function usePagination(source = []) {
  if (!(source instanceof Array)) {
    throw new TypeError("The source isn't instace of array type");
  }

  const ITEMS_PER_PAGE = 20;
  const IS_LARGE_PAGES = source.length > ITEMS_PER_PAGE;

  const [data, setData] = useState(source || []);
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialIndex, setInitialIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    if (IS_LARGE_PAGES) {
      let totalPages = 0;
      let totalItems = source.length;
      setData(source.slice(initialIndex, endIndex));

      while (totalItems > 0) {
        totalPages++;
        totalItems -= ITEMS_PER_PAGE;
      }

      setPages(totalPages);
    } else {
      setPages(1);
    }
  }, [IS_LARGE_PAGES, endIndex, initialIndex, source]);

  const nextPage = () => {
    if (IS_LARGE_PAGES && currentPage < pages) {
      const iIndex = initialIndex + ITEMS_PER_PAGE;
      const eIndex = endIndex + ITEMS_PER_PAGE;

      setData(source.slice(iIndex, eIndex));

      setCurrentPage(currentPage + 1);
      setInitialIndex(iIndex);
      setEndIndex(eIndex);
    }
  };

  const previusPage = () => {
    if (IS_LARGE_PAGES && currentPage > 1) {
      const iIndex = initialIndex - ITEMS_PER_PAGE;
      const eIndex = endIndex - ITEMS_PER_PAGE;

      setData(source.slice(iIndex, eIndex));

      setCurrentPage(currentPage - 1);
      setInitialIndex(iIndex);
      setEndIndex(eIndex);
    }
  };

  return { nextPage, previusPage, data, pages, currentPage, ITEMS_PER_PAGE };
}
