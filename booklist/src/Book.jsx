import { books } from "./BookList";

 
const Book = (props) => {
  const { img, title, author, id } = props;
  console.log(props);

  const getSingleBook = () => {
    getBook(id);
  }

  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  }
 
  const handleClicky = () => {
    console.log('clicked')
  }

  const displayTitle = () => {
    console.log(title);
  }
  

  return (
    <article className='book'>

      <img onClick={handleClicky} src={img} alt="" />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      {/* <button onClick={() => getBook(id)}>get book</button> */}
      <button onClick={getSingleBook}>get book</button>
      <h4>{author}</h4>
     
     
    </article>
  )
}

export default Book