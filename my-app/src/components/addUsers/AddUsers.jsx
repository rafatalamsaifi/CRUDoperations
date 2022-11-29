import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from "axios";
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
         axios.post("https://crudcrud.com/api/913d74e8894f4865b38f00e60e6a8839/unicorns", formData)
        console.log(firstName)
        console.log(lastName)
        console.log(age)
        console.log(checkbox)
    }

    
    return (
        <div className='create-form'>
            
            <Form>
                <h2>Fill the Form.</h2>
                <Form.Field>
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
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default AddUsers;