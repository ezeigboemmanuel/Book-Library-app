import { useState } from 'react'
import './App.css'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import Header from './components/Header'

function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log(`id to be edited ${id}`)
    setBookId(id);
  }
  return (
    <div className="App">
      <Header />
      <AddBook id = {bookId} setBookId = {setBookId} />
      <BookList getBookId = {getBookIdHandler} />
    </div>
  )
}

export default App
