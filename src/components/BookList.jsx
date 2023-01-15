import { useState, useEffect } from 'react'
import '../App.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import BookDataService from "../services/book.services";


function BookList({getBookId}){
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const data = await BookDataService.getAllBooks();
        console.log(data.docs);
        setBooks(data.docs.map(doc => ({
            ...doc.data(), id: doc.id
        })))
    }

    const deleteHandler = async (id) => {
        await BookDataService.deleteBook(id);
        getBooks();
    }
    return (
        <div className='booklist'>
            <div className= "mb-2">
                <Button variant = "dark" size = "sm" onClick = {getBooks}>Refresh</Button>
            </div>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Book Title</th>
                    <th>Book Author</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((doc, index) => {
                        return (
                            <tr key = {doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.title}</td>
                                <td>{doc.author}</td>
                                <td>
                                    <Button 
                                    variant="secondary" 
                                    size="sm" 
                                    onClick ={(e) => getBookId(doc.id)}
                                    className = "mx-3"
                                    >
                                        Edit
                                    </Button> 
                                    <Button 
                                    variant="danger" 
                                    size="sm"
                                    onClick ={(e) => deleteHandler(doc.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default BookList;