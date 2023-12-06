// AddBookModal.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/BookSlice";

const AddBookModal: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [book, setBook] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBook = () => {

    // Validate that required fields are not empty
    if (book.name.trim() === "" || book.price === 0 || book.category.trim() === "" || isNaN(book.price) || book.description.trim() === "") {
      alert("Please fill every fields");
      return;
    }

    dispatch(addBook({ ...book, id: Date.now() }));
    setBook({ ...book, name: "", price: 0, category: "", description: "" });
    closeModal();
  };

  return (
    <div className="flex items-center  justify-between mb-4"> {/* Updated to use flex to align items */}
      <h1 className="text-2xl font-bold mb-4 mr-4">Book List</h1>
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded"
          onClick={openModal}
        >
          <p className="text-center">Add Book</p>

        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0  bg-gray-500  bg-opacity-75 flex items-center justify-center">
          <div className="bg-white py-10 text-md lg:px-44 sm:px-28  rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Book</h2>

            <label className=" mb-2">Name:</label>
            <input
              type="text"
              value={book.name}
              onChange={(e) => setBook({ ...book, name: e.target.value })}
              className="border rounded  w-full mb-2 p-2"

            />

            <label className="block mb-2 d-flex justify-start">Price:</label>
            <input
              type="number"
              value={book.price}
              onChange={(e) => setBook({ ...book, price: parseFloat(e.target.value) })}
              className="border rounded w-full mb-2 p-2"
              required
            />

            <label className="block mb-2">Category:</label>
            <input
              type="text"
              value={book.category}
              onChange={(e) => setBook({ ...book, category: e.target.value })}
              className="border rounded w-full mb-2 p-2"
              required
            />

            <label className="block mb-2">Description:</label>
            <textarea
              value={book.description}
              onChange={(e) => setBook({ ...book, description: e.target.value })}
              className="border rounded w-full mb-2 p-2"
              required
            />

            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleAddBook}
              >
                Add Book
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBookModal;