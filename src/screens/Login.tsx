import React from 'react'
import {Form, Button, Row, Container, FloatingLabel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Container className='panel'>
        <Form>
          <Form.Group as={Row} className='mb-3' controlId='formBasicId'>
          <FloatingLabel controlId='floatingInput' label='ID' className='mb-3'>
            <Form.Control type='id' placeholder='Id' />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='formBasicPassword'>
          <FloatingLabel controlId='floatingInput' label='Password' className='mb-3'>
            <Form.Control type='password' placeholder='Password' />
          </FloatingLabel>
          </Form.Group>
          <br/>

          <Button variant='primary' type='submit'>Submit</Button>
          <Link to = {"/sign_up"}>
                  <Button variant="outline-secondary">Sign Up</Button>
          </Link>
          <Link to = {"/"}>
                  <Button variant="danger">Cencel</Button>
          </Link>
        </Form>
      </Container>
    </div>
  )
}

export default login