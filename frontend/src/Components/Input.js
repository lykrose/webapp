import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Input = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter Phone Number" />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" >Submit</Button>{' '}
            <Button variant="secondary" type="button">Delete</Button>
        </>
    )
}

export default Input