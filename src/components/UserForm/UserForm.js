import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UserForm = () => {

    const [errormessage, setErrormessage] = useState('');

    const handleUsername = () => {

    }

    const handleForm = (event,) => {
        event.preventDefault();

        const url = `http://localhost:5000/userinfo`;

        let username = event.target.username.value;

        /* if (username === '') {
            setErrormessage('Please enter your username');
            return;
        } */

        // setErrormessage('');

        const userInfo = {
            username: username
        }
        console.log(userInfo);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        event.target.reset();

    };

    return (
        <div>
            <div className='w-50 mx-auto m-5'>
                <Form onSubmit={handleForm}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name='username' onChange={handleUsername} required autoComplete='off' />
                    </Form.Group>


                    <p className='text-danger'>{errormessage}</p>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UserForm;