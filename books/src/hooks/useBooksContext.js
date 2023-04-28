import { useContext } from "react";
import BooksContext from "../context/books";

//making a custom hook and calling useContext
//having it in a different file will help in duplication of imports
function useBooksContext(){
  return useContext(BooksContext);
}

export default useBooksContext;