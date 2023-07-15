type PaginationProps = {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const ARROW_BUTTON_STYLE =
  'relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:bg-gray-100';

const Pagination = ({ total, limit, page, setPage }: PaginationProps) => {
  const pageNum = Math.ceil(total / limit);

  return (
    <>
      <div className='flex items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
        <div className='flex flex-1 justify-between sm:hidden'>
          <button
            onClick={() => page !== 1 && setPage(page - 1)}
            disabled={page === 1}
            className={ARROW_BUTTON_STYLE}
          >
            Previous
          </button>
          <button
            onClick={() => page !== pageNum && setPage(page + 1)}
            disabled={page === pageNum}
            className={ARROW_BUTTON_STYLE}
          >
            Next
          </button>
        </div>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-center'>
          <div>
            <nav
              className='isolate inline-flex -space-x-px rounded-md shadow-sm'
              aria-label='Pagination'
            >
              <button
                onClick={() => page !== 1 && setPage(page - 1)}
                disabled={page === 1}
                className={ARROW_BUTTON_STYLE}
              >
                <span className='sr-only'>Previous</span>
                &lt;
              </button>
              {Array(pageNum)
                .fill('')
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage(index + 1)}
                    className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                      page === index + 1
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-600 z-10'
                        : 'border-gray-300 bg-white text-gray-500'
                    }`}
                    aria-current='page'
                  >
                    {index + 1}
                  </button>
                ))}
              <button
                onClick={() => page !== pageNum && setPage(page + 1)}
                className={ARROW_BUTTON_STYLE}
                disabled={page === pageNum}
              >
                <span className='sr-only'>Next</span>
                &gt;
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
