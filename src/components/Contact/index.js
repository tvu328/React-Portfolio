
import React from "react"
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xvonqeog");
    if (state.succeeded) {
        return <p>Email Sent!</p>;
    }
    return (
        <section className="contact">
            <h1>Contact</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Your Name</label>
                    <br />
                    <input
                        id="name"
                        type="name"
                        name="name"
                    />
                </div>
                <div>
                    <label>Your Email</label>
                    <br />
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label>Your Message</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;