import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// import "./UsersDetail.css"

const UsersDetail = () => {
    const [apiData, setApiData] = useState([])
    try {
        useEffect(() => {
        axios.get(`https://crudcrud.com/api/2604ed419f344dc7ae626f409719fa23/unicorns`).then((resp) => {
            console.log("resp => ", resp)
            setApiData(resp.data)
        })
        
    }, [])
        
    } catch (error) {
        console.log(error)
        
    }
    
    // async function fetchData() {
    //     const data = axios.get("https://crudcrud.com/api/913d74e8894f4865b38f00e60e6a8839/unicorns")
    //     setAPIData(data.data)
    // }
    const getData = ()=>{
        axios.get(`https://crudcrud.com/api/2604ed419f344dc7ae626f409719fa23/unicorns`).then((resp) => {
            console.log("resp => ", resp)
            setApiData(resp.data)
        })

    }

    const onDelete = (id)=>{
        axios.delete(`https://crudcrud.com/api/2604ed419f344dc7ae626f409719fa23/unicorns/${id}`)
        .then(()=>{
            getData();
        })
    }
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
                    {apiData.map((data) => {
                        return (
                                <Table.Row key={data.id}>
                                    <Table.Cell >{data.firstName}</Table.Cell>
                                    <Table.Cell >{data.lastName}</Table.Cell>
                                    <Table.Cell >{data.age}</Table.Cell>
                                    <Table.Cell >{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                    <Table.Cell ><Button color='green'>Update</Button></Table.Cell>
                                    <Table.Cell ><Button color='red' onClick={()=> {
                                        onDelete(data._id)
                                        console.log(data)
                                        }}>Delete</Button></Table.Cell>
                                    
                                 </Table.Row>
                        )
                    })}
                    {/* <button onClick={fetchData}>Read Data</button> */}
                        
                </Table.Body>
            </Table>
            <Link to="/">
                <Button class="ui primary button">Add New Users</Button>
            </Link>
        </div>
    )
}


export default UsersDetail

      
   