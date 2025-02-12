"use client";
import React from 'react'
import React, { useState } from 'react';

const Form = () => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //show value
    const handleSubmit = (event) => {
        console.log(event);
        event.preventdefault();

        //make show value true
        console.log(fullName, email, password);
    };

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <h1>Register Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type='text'
                                name='name'
                                id='name'
                                className='border border-purple-300'
                                onChange={(event) => {
                                    setFullname(event.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor='name'>email</label>
                            <input type='text'
                                email='email'
                                id='email'
                                classemail='border border-purple-300'
                                onChange={(event) => {
                                    setFullemail(event.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor='name'>password</label>
                            <input type='text'
                                password='password'
                                id='password'
                                classpassword='border border-purple-300'
                                onChange={(event) => {
                                    setFullpassword(event.target.value);
                                }}
                            />
                        </div>
                    </form >
                </div>
            </div>
        </div>



    )
}

export default Form;