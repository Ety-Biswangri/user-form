import React from 'react';
import { Button, Form } from 'react-bootstrap';

const UserForm = () => {
    return (
        <div>
            <div className='w-50 mx-auto m-5'>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UserForm;