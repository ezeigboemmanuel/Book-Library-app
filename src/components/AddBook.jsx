import { useState } from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddBook(){
    return (
        <div>
            <div className = "addbook">
                <div className = "inputdiv">
                    <Form.Control type="text" placeholder="Book Title" className = "input" />
                    <Form.Control type="text" placeholder="Book Author" className = "input" />
                    <Button variant="primary" type="submit" className = "input inputdiv" >
                        Add/Update Book
                    </Button>   
                </div>
            </div>
        </div>
    )
}

export default AddBook;