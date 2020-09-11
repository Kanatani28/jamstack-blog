const FIRST_PAGE_COUNT = 5;
const COUNT_PER_PAGE = 6;

export const getPageNumbersWithoutFirst = (totalCount: number): number[] => {
  if (totalCount - FIRST_PAGE_COUNT <= 0) {
    return [];
  }

  return getPageNumbers(totalCount).slice(1);
};

export const getPageNumbers = (totalCount: number): number[] => {
  const lastPage = getLast(totalCount);
  return Array.from({ length: lastPage + 1 }, (v, k) => k).slice(1);
};

export const getOffset = (page: number): number => {
  return FIRST_PAGE_COUNT + (page - 2) * COUNT_PER_PAGE;
};

export const isFirst = (currentPage: number): boolean => currentPage === 1;

export const isLast = (currentPage: number, totalCount: number): boolean =>
  getLast(totalCount) === currentPage;

export const getLast = (totalCount: number): number => {
  if (totalCount - FIRST_PAGE_COUNT <= 0) {
    return 1;
  }
  const pageNumber = Math.ceil(
    (totalCount - FIRST_PAGE_COUNT) / COUNT_PER_PAGE
  );
  return pageNumber + 1;
};
