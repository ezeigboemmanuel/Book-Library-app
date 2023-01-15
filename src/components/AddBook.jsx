import { useState, useEffect } from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import BookDataService from "../services/book.services";

function AddBook({id, setBookId}){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState({error: false, msg: ""});

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setMessage("");

        if (title === "" || author === ""){
            setMessage({error: true, msg: "All fields are mandatory!"});
            return;
        }
        const newBook = {
            title,
            author
        }
        console.log(newBook);

        try{
            if(id !== undefined && id !== ""){
                await BookDataService.updateBook(id, newBook);
                setBookId("")
                setMessage({error: false, msg: "updated successfully!"});
            }else{
                await BookDataService.addBook(newBook);
                setMessage({error: false, msg: "New Book added successfully!"});
            }
        }catch(err){
            setMessage({error: true, msg: err.message})
        }

        setTitle("")
        setAuthor("")
    }

    const editHandler = async () => {
        setMessage("")
        try{
            const docSnap = await BookDataService.getBook(id);
            setTitle(docSnap.data().title)
            setAuthor(docSnap.data().author)
        }catch(err){
            setMessage({error: true, msg: err.message})
        }
    }

    useEffect(() => {
        if (id !== undefined && id !== ""){
            editHandler();
        }
    }, [id])
    return (
        <div>
            {message?.msg && (<Alert variant = {message?.error ? "danger" : "success"} dismissible onClose = {() => setMessage("")}>{message?.msg} </Alert>)}
            <div className = "addbook">
                <div className = "inputdiv">
                    <Form onSubmit = {handleSubmit}>
                        <Form.Control 
                            type="text" 
                            placeholder="Book Title" 
                            className = "input" 
                            value = {title} 
                            onChange = {(e) => setTitle(e.target.value)}
                        />
                        <Form.Control 
                            type="text" 
                            placeholder="Book Author" 
                            className = "input" 
                            value = {author} 
                            onChange = {(e) => setAuthor(e.target.value)}
                        />
                        <Button variant="primary" type="submit" className = "input inputdiv" >
                            Add/Update Book
                        </Button>
                    </Form>   
                </div>
            </div>
        </div>
    )
}

export default AddBook;