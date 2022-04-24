import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Input = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:8080/users", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                }),
            })
            let resJSON = await res.json()
            if (res.status === 200) {
                setName("")
                setEmail("")
                setPhone("")
                setMessage("User added successfully")
            } else {
                setMessage("An error occured    ")
            }
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" value={phone} placeholder="Enter Phone Number" onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" >Submit</Button>{' '}
            <Button variant="secondary" type="button">Delete</Button>
            <div className="message">{ message ? <p>{ message }</p> : null }</div>
        </>
    )
}

export default Input