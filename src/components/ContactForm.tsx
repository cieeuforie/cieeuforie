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
        <form className="border-1 rounded-xl p-4 mb-8 border-dark-brown text-sm" onSubmit={handleSubmit}>
            <fieldset className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-2 md:w-1/2">
                            <label htmlFor="firstName">Prénom</label>
                            <input
                                type="text"
                                placeholder="John"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="bg-white p-2 rounded-lg border-1 border-dark-brown shadow-[0_6px_4px_rgba(81,53,5,0.35)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:w-1/2">
                            <label htmlFor="lastName">Nom</label>
                            <input
                                type="text"
                                placeholder="Wick"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="bg-white p-2 rounded-lg border-1 border-dark-brown shadow-[0_6px_4px_rgba(81,53,5,0.35)]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="mail@mail.com"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white p-2 rounded-lg border-1 border-dark-brown shadow-[0_6px_4px_rgba(81,53,5,0.35)]"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="bg-white p-2 rounded-lg border-1 border-dark-brown shadow-[0_6px_4px_rgba(81,53,5,0.35)] resize-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 self-center bg-dark-brown text-white py-2 px-4 rounded-xl shadow-[0_6px_4px_rgba(81,53,5,0.35)] md:self-start md:px-6"
                >
                    Envoyer
                    <GoPaperAirplane />
                </button>

            </fieldset>
        </form>
    )
}
