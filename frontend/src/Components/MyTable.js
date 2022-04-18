import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table'
import JsonData from './../Data/example.json'

function MyTable() {
    const SimpleData = JsonData.rows.map(obj => obj.value)
    const Data = SimpleData.map(
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
    )
    return (
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
                {Data}
            </tbody>
        </Table>
    )
}

export default MyTable