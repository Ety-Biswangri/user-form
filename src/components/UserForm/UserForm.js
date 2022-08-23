import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UserForm = () => {

    const [errormessage, setErrormessage] = useState('');
    let [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isReload, setIsReload] = useState(false);

    // load all users
    useEffect(() => {
        fetch(`https://secure-shore-18409.herokuapp.com/userinfo`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [isReload]);

    // user name field data handling
    const handleUsername = (event) => {
        let name = event.target.value;

        for (const user of users) {
            if (user.username === name) {
                setIsDisabled(true);
                setErrormessage('This username has already used');
                return;
            }
            else {
                setIsDisabled(false);
                setErrormessage('');
                setUsername(name);
                setIsReload(!isReload);
            }
        }
    }

    // form handling
    const handleForm = (event) => {
        event.preventDefault();

        const url = `https://secure-shore-18409.herokuapp.com/userinfo`;

        if (username === '') {
            return;
        }

        const userInfo = {
            username: username
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        event.target.reset();
        // window.location.reload(false);
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

                    <Button variant="primary" type="submit" disabled={isDisabled}>
                        Add
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UserForm;