import ReactPaginate from 'react-paginate'

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={({ selected }) => setCurrentPage(selected + 1)}
      containerClassName="flex justify-center space-x-2 my-4"
      pageClassName="px-3 py-1 border rounded"
      activeClassName="bg-blue-500 text-white"
      previousLabel="Previous"
      nextLabel="Next"
      previousClassName="px-3 py-1 border rounded"
      nextClassName="px-3 py-1 border rounded"
    />
  )
}