// BookList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../redux/BookSlice';
import { RootState } from '../redux/Bookstore';
import EditBook from './EditBook';

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.book.books);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);



  const handleDelete = (bookId: number) => {
    dispatch(deleteBook(bookId));
  };

  const handleEdit = (bookId: number) => {
    setSelectedBookId(bookId);
  };

  const handleCloseEdit = () => {
    setSelectedBookId(null);
  };

  return (
    <div className="mx-auto overflow-x-auto ">
      <table className="min-w-full border shadow-2xl text-sm rounded-md overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-md text-white">
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className='border-x-2 odd:bg-white even:bg-blue-50 border-y-neutral-800'>
              <td
                className="border p-2 cursor-pointer  text-blue-500 hover:underline"
                onClick={() => handleEdit(book.id)}
              >
                {book.name}
              </td>
              <td className="border p-2">{book.price}</td>
              <td className="border p-2">{book.category}</td>
              <td className="border p-2">{book.description}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBookId && (
        <EditBook bookId={selectedBookId} onClose={handleCloseEdit} />
      )}
    </div>
  );
};

export default BookList;