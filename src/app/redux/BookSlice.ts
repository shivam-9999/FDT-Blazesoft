// BookSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

const initialBooks: Book[] = [
  {
    id: 1,
    name: "The Great Gatsby",
    price: 15.99,
    category: "Fiction",
    description: "A classic novel by F. Scott Fitzgerald.",
  },
  {
    id: 2,
    name: "Sapiens: A Brief History of Humankind",
    price: 24.99,
    category: "Non-Fiction",
    description: "An exploration of the history of the human species.",
  },
  {
    id: 3,
    name: "The Hobbit",
    price: 12.5,
    category: "Fantasy",
    description: "A fantasy novel by J.R.R. Tolkien.",
  },
  {
    id: 4,
    name: "To Kill a Mockingbird",
    price: 18.95,
    category: "Fiction",
    description: "A classic novel by Harper Lee.",
  },
  {
    id: 5,
    name: "The Catcher in the Rye",
    price: 14.75,
    category: "Fiction",
    description: "A novel by J.D. Salinger.",
  },

  // Add more books as needed
];
interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: initialBooks,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
