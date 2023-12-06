// EditBook.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../redux/BookSlice";
import { RootState } from "../redux/Bookstore";

interface EditBookProps {
    bookId: number;
    onClose: () => void;
}

const EditBook: React.FC<EditBookProps> = ({ bookId, onClose }) => {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.book.books);
    const [editedBook, setEditedBook] = useState({
        id: bookId,
        name: "",
        price: 0,
        category: "",
        description: "",
    });

    useEffect(() => {
        const selectedBook = books.find((book) => book.id === bookId);

        if (selectedBook) {
            setEditedBook(selectedBook);
        }
    }, [bookId, books]);

    const handleEditBook = () => {
        dispatch(updateBook(editedBook));
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white py-10 lg:px-44 sm:px-28 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Edit Book</h2>

                <label className="block mb-2">Name:</label>
                <input
                    type="text"
                    value={editedBook.name}
                    onChange={(e) => setEditedBook({ ...editedBook, name: e.target.value })}
                    className="border rounded w-full mb-2 p-2"
                />

                <label className="block mb-2">Price:</label>
                <input
                    type="number"
                    value={editedBook.price}
                    onChange={(e) => setEditedBook({ ...editedBook, price: parseFloat(e.target.value) })}
                    className="border rounded w-full mb-2 p-2"
                />

                <label className="block mb-2">Category:</label>
                <input
                    type="text"
                    value={editedBook.category}
                    onChange={(e) => setEditedBook({ ...editedBook, category: e.target.value })}
                    className="border rounded w-full mb-2 p-2"
                />

                <label className="block mb-2">Description:</label>
                <textarea
                    value={editedBook.description}
                    onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
                    className="border rounded w-full mb-2 p-2"
                />

                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={handleEditBook}
                    >
                        Save Changes
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditBook;