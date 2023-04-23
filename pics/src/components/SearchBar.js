import {useState} from 'react';

function SearchBar({onSubmit}) {

const [value, setValue] = useState=('');

const handleFormSubmit = (event) => {
  //prevents page from reloading
  event.preventDefault();
  onSubmit(value);
};
const handleChange = (event) => {
  setValue(event.target.value);
};

return (
  <div>
    <form onSubmit={handleFormSubmit}>
      <input value = {value} onChange={handleChange}/>
    </form>
  </div>
  )
}

export default SearchBar;