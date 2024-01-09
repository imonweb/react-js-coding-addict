import Book from "./Book"
import { books } from "./BookList";
import ContactForm from "./ContactForm";


function App() {
  
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return (
            <Book {...book} key={book.id} getBook={book} />)
          ;
        })}
      </section>
      <ContactForm />
    </>
  )
}

export default App
