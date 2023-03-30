
import React from "react"
import { useForm, ValidationError } from '@formspree/react';

import {useState} from "react";

function Contact() {
    // const [state, handleSubmit] = useForm("xvonqeog");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [message, setMessage] = useState("")

    function onChangeHandler (event) {
        const { value, name } = event.target;

        if(name==="name") {
            setFormData({
                ...formData,
                name: value
            })
        }

        if(name==="email") {
            setFormData({
                ...formData,
                email: value
            })
        }

        if(name==="message") {
            setFormData({
                ...formData,
                message: value
            })
        }
    }

    function validation (event) {
        const { value, name } = event.target;

        let currentMessage = "";

        if(name==="name") {
            if(value=="") {
                currentMessage+="Name cannot be empty!\n"
            }
        }

        if(name==="email") {
            if(value=="") {
                currentMessage+="Email cannot be empty!\n"
            } else if(!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                currentMessage+="Email is not valid!\n"
            }
        }

        if(name==="message") {
            if(value=="") {
                currentMessage+="Message cannot be empty!\n"
            }
        }

        setMessage(currentMessage)
    }

    // if (state.succeeded) {
    //     return <p>Email Sent!</p>;
    // }
    function handleSubmit () {

    }

    return (
        <section id= "contact" className="contact">
            <h1>Contact</h1>
            <h2>{message}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Your Name</label>
                    <br />
                    <input
                        id="name"
                        type="name"
                        name="name"
                        value={formData.name}
                        onChange={onChangeHandler}
                        onBlur={validation}
                    />
                </div>
                <div>
                    <label>Your Email</label>
                    <br />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onChangeHandler}
                        onBlur={validation}

                    />
                    {/* <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    /> */}
                </div>
                <div>
                    <label>Your Message</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        onChange={onChangeHandler}
                        onBlur={validation}
                        value={formData.message}
                    />
                    
                    {/* <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    /> */}
                </div>
                <button type="submit" 
                // disabled={state.submitting}
                >
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;