import { useState } from 'react'
import '../App.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function BookList(){
    return (
        <div className='booklist'>
            <Table striped bordered>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Button variant="secondary" size="sm">Edit</Button> <Button variant="danger" size="sm">Delete</Button>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Ezeigbo</td>
                    <td>Emmanuel</td>
                    <td>@thecodinglord</td>
                    <td>
                        <Button variant="secondary" size="sm">Edit</Button> <Button variant="danger" size="sm">Delete</Button>
                    </td>
                     
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default BookList;