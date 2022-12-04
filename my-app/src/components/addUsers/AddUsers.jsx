import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from "axios";
import { Link } from 'react-router-dom';
// import "./AddUsers.css"

const AddUsers = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [checkbox, setCheckbox] = useState(false)

    const postData = () => {
        const formData ={
            firstName,
            lastName,
            age,
            checkbox
        }
         axios.post("https://crudcrud.com/api/2604ed419f344dc7ae626f409719fa23/unicorns", formData)
        console.log(firstName)
        console.log(lastName)
        console.log(age)
        console.log(checkbox)
        document.getElementById('demo').innerHTML = "Data added successfully!"
    }

    
    return (
        <div className='create-form'>
            
            <Form>
                <h2>Fill the Form.</h2>
                <Form.Field className="m-3" >
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                 <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age' type="number" onChange={(e) => setAge(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>(setCheckbox(!checkbox))}/>
                </Form.Field>
                <Button onClick={postData} type='submit' class="ui primary button">Submit</Button>
                <Link to="/usersdetail">
                <Button class="ui secondary button">Users Detail</Button>
                </Link>
            </Form>
            <p style={{color: "green"}} id='demo' ></p>
        </div>
    )
}

export default AddUsers;