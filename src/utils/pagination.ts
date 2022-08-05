export interface PaginationResult<T> {
  data: T[];
  pageData: {
    total: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
    lastPage: number;
  }
}

export function paginateResponse<T>(rows: T[], total: number, page: number, limit: number): PaginationResult<T> {
  const lastPage = Math.ceil(total / limit);
  const nextPage = page + 1 > lastPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;

  // console.log(lastPage, nextPage, page + 1 > lastPage, page);
  return {
    data: rows,
    pageData: {
      total,
      currentPage: +page,
      nextPage,
      prevPage,
      lastPage,
    },
  };
}

export function calcSkip(page: number, limit: number) {
  return (page - 1) * limit;
}