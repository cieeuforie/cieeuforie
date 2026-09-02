import { useState } from "react"
import type { Contact } from "../types/contact";
import { useNavigate } from "react-router-dom";


export default function ContactForm() {

    // States required for form

        // Success or error message
        const[successMessage, setSuccessMessage] = useState<string>("");
        const[errorMessage, setErrorMessage] = useState<string>("");

        // Form
        const[formData, setFormData] = useState<Contact>({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        });

        // Navigation to redirect once the form submitted
        const navigate = useNavigate();

    return (
        <div>

        </div>
    )
}
