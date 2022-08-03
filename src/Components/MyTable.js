import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table'
import { getData } from '../Services/data'

const MyTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        let mounted = true;
        getData()
            .then(items => {
                if(mounted) {
                    setData(items)
                    console.log(items)
                }
            })
        return () => mounted = false
    }, [])

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
    )
}

export default MyTable