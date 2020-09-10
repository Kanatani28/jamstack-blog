const FIRST_PAGE_COUNT = 5;
const COUNT_PER_PAGE = 6;

export const getPageNumbersWithoutFirst = (totalCount: number): number[] => {
  if (totalCount - FIRST_PAGE_COUNT <= 0) {
    return [];
  }
  const pageNumber = Math.ceil(
    (totalCount - FIRST_PAGE_COUNT) / COUNT_PER_PAGE
  );
  return Array.from({ length: pageNumber }, (_, i) => i + 2);
};

export const getOffset = (page: number): number => {
  return FIRST_PAGE_COUNT + (page - 2) * COUNT_PER_PAGE;
};
