import Book from "./Book"
import { books } from "./BookList";

function App() {
   

  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  )
}

export default App
