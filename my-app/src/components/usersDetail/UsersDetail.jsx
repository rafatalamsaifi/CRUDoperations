import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react'
// import "./UsersDetail.css"

const UsersDetail = () => {
    const [APIData, setAPIData] = useState([])
    try {
        useEffect(() => {
        axios.get("https://crudcrud.com/api/913d74e8894f4865b38f00e60e6a8839/unicorns").then((resp) => {
            console.log("resp => ", resp)
            setAPIData(resp.data)
        })
        
    }, [])
        
    } catch (error) {
        console.log(error)
        
    }
    
    // async function fetchData() {
    //     const data = axios.get("https://crudcrud.com/api/913d74e8894f4865b38f00e60e6a8839/unicorns")
    //     setAPIData(data.data)
    // }
    return (
        <div className='formData'>
            <h2>Form Data</h2>
            <Table singleLine>
                <Table.Header className='formTable'>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                                <Table.Row>
                                    <Table.Cell >{data.firstName}</Table.Cell>
                                    <Table.Cell >{data.lastName}</Table.Cell>
                                    <Table.Cell >{data.age}</Table.Cell>
                                <Table.Cell >{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell ><Button color='green'>Update</Button></Table.Cell>
                                <Table.Cell ><Button color='red'>Delete</Button></Table.Cell>
                                
                                 </Table.Row>
                        )
                    })}
                    {/* <button onClick={fetchData}>Read Data</button> */}
                        
                </Table.Body>
            </Table>
        </div>
    )
}


export default UsersDetail

      
   