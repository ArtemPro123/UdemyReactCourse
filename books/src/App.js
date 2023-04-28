import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { createContext } from "react";
import BooksContext from "./context/books";

//UseState - allows a component to use the state system
//UseEffect - allows a component to run code at specific point in time
//UseContext - allows a component to access values stored in context

function App () {

  //get context from books file, destructed to get each method
  const {fetchBooks} = useContext(BooksContext);
  
  useEffect(()=>{
    fetchBooks();
  }, []);

  return <div className="app">
    <h1>Reading List</h1>
    <BookList />
    <BookCreate />
  </div>
}

export default App;