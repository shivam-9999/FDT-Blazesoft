// import { useClient } from 'next/react-dom';
"use client"
import "./globals.css"
import { Provider } from 'react-redux';
import store from '../app/redux/Bookstore';
import AddBookModal from './Components/AddBook'

import BookList from '../app/Components/BookList';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl text-orange-100 font-bold">My Bookstore</h1>
      </div>
    </nav>
  );
};

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App h-screen bg-slate-100">
        <NavBar />
        <div className="container mx-auto p-4">
          <AddBookModal />
          <BookList />
        </div>
      </div>
    </Provider>
  );
};

export default Home;



