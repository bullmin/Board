import React from 'react'
import {Table, Button} from 'react-bootstrap'

const home = () => {
  return (
    <div>
       <h1>Board 1</h1>
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
    
    <h1>Board 2</h1>
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
    </div>
  )
}

export default home