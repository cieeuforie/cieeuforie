import React, { useState } from "react"
import type { Contact } from "../types/contact";
import { useNavigate } from "react-router-dom";

import { GoPaperAirplane } from "react-icons/go";

export default function ContactForm() {

    // States required for form

    // Success or error message
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    // Form
    const [formData, setFormData] = useState<Contact>({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    // Navigation to redirect once the form submitted
    const navigate = useNavigate();

    // Function to get value typed in input form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    // Function to send data to the company email
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        // When wordpress API will be set up a fetch will be necessary to send data to wordpress endpoint (wp_mail)

        setSuccessMessage("Message envoyé avec succès ! La Compagnie vous répondra dans les plus bref délais.")
    };

    return (
        <form className="border-1 border-dark-brown" onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <div className="flex flex-col">
                        <label htmlFor="firstName">Prénom</label>
                        <input
                            type="text"
                            placeholder="John"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName">Nom</label>
                        <input
                            type="text"
                            placeholder="Wick"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="monmail@mail.com"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                        />
                    </div>
                </div>

                <button 
                    type="submit"
                    className="flex items-center justify-center"
                >
                    Envoyer
                    <GoPaperAirplane />
                </button>

            </fieldset>
        </form>
    )
}
