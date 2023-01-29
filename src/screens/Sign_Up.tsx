import React from 'react'
import {Form, Button, Row, Container, FloatingLabel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Sign_Up = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Container>
        <Form>

        <Form.Group as={Row} className='mb-3' controlId='formBasicName'>
          <FloatingLabel controlId='floatingInput' label='Name' className='mb-3'>
            <Form.Control type='name' placeholder='Name' />
          </FloatingLabel>
          </Form.Group>


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

          <Form.Group as={Row} className='mb-3' controlId='ConfirmPassword'>
          <FloatingLabel controlId='floatingInput' label='Confirm Password' className='mb-3'>
            <Form.Control type='confirm password' placeholder='Confirm Password' />
          </FloatingLabel>
          </Form.Group>
          <br/>

          <div>
            <Button variant='primary' type='submit'>Sign Up</Button>
            <Link to = {"/"}>
                  <Button variant="danger">Cencel</Button>
          </Link>
          </div>
          
        </Form>
      </Container>
    </div>
  )
}

export default Sign_Up