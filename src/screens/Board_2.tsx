import React from 'react'
import {Table, Button} from 'react-bootstrap'

const Board_2 = () => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Select</th>
          <th>#</th>
          <th>Title</th>
          <th>Posted by</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>1</td>
          <td>Post1</td>
          <td>Test</td>
          <td>2023-01-20</td>
        </tr>
        <tr>
        <td>
            <input type="checkbox"/>
          </td>
          <td>2</td>
          <td>Post2</td>
          <td>Test</td>
          <td>2023-01-20</td>
        </tr>
        <tr>
        <td>
            <input type="checkbox"/>
          </td>
          <td>3</td>
          <td>Post3</td>
          <td>Test</td>
          <td>2023-01-20</td>
        </tr>
      </tbody>
    </Table>
    <Button variant='info'>Write</Button>
    <Button variant='secondory'>Edit</Button>
    <Button variant='danger'>Delete</Button>
    </div>
  )
}

export default Board_2