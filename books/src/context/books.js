import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}){
  
  const [books, setBooks] = useState([]);

  //two properties, Provider and Consumer
  //provider is used to specify data

  const BookContext = createContext();

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
    title: title
    });

    const updateBooks = [
      ...books, response.data
    ];
    setBooks(updateBooks)
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return {...book, ...response.data};
     }
     return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updateBooks = books.filter((book)=> {
      return book.id != id;
    })
    setBooks(updateBooks);
  };

  //adding values we will share using context
  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks
  };

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
}

export default BooksContext;
export { Provider };
