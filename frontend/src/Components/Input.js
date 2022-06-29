import React, { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table'
import { getData, setData } from '../Services/data'

const Input = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [alert, setAlert] = useState("")
    const [data, setInfo] = useState([])
    let mounted = useRef(true)

    useEffect(() => {
        mounted.current = true
        // if (data.length && !alert) {
        //     return;
        // }
        getData()
            .then(items => {
                if(mounted.current) {
                    setInfo(items)
                    console.log(items)
                }
            })
        return () => mounted = false
    }, [alert, data])

    useEffect (() => {
        if (alert) {
            setTimeout(() => {
                if (mounted.current) {
                    setAlert("false")
                }
            }, 1000)
        }
    }, [alert])

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(name, email, phone)
            .then(() => {
                if (mounted.current) {
                    setName('Enter Name')
                    setEmail('Enter Email Address')
                    setPhone('Enter Phone Number')
                    setAlert(true)
                }
            })
    }

    let handleDelete = async (e) => {
        // e.preventDefault();
        // try {
        //     let res = await fetch("https://localhst:8080/users", {

        //     })
        // }
    }

    return (
        <>
            <Table striped border hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Selection</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (info)=>{
                            return(
                                <tr>
                                    <td>{info.id}</td>
                                    <td>{info.name}</td>
                                    <td>{info.email}</td>
                                    <td>{info.phone}</td>
                                    <td><input type='checkbox'/></td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </Table>
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
                <Button variant="primary" type="submit" >Submit</Button>{' '}
            </Form>
            {/* <Button variant="secondary" type="button" onClick={handleDelete}>Delete</Button> */}
            {/* <div className="message">{ message && alert ? <p>{ message }</p> : null }</div> */}
        </>
    )
}

export default Input