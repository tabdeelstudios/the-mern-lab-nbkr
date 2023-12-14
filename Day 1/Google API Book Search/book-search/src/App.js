import { useState } from 'react';
import './App.css';

function App() {

  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState("");

  var content = '';

  const searchBooks = async () => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + bookName);
    const data = await response.json();

    data.items.map((book) => {
      content += `<div className='book'>
        <img src=${book.volumeInfo.imageLinks.thumbnail} />
        <h1>${book.volumeInfo.title}</h1>
      </div>`
    });
    setBooks(content);
  }

  return (
    <div>
      <section id='search'>
        <input type='text' onChange={(e) => setBookName(e.target.value)} />
        <button onClick={searchBooks}>Search</button>
      </section>
      <hr />
      <section id='books'>
        {books}
      </section>
    </div>
  );
}

export default App;
