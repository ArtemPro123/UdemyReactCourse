import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const handleSubmit = async (term) => {
    const results = await searchImages(term);
  }

  return <div>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList />
  </div>
}

export default App;



//AccessKey: ykRr-TruivY7oJ7oWw8W0Njc4GzIRRnYClhiHnZoLtM
//SecretKey: D6VYH2UXpJ-FgK027C8mHBsYCBxd4B0jc6c8Zi6COvc