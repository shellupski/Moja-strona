// src/components/Contact.js
import React, { useState, useRef } from "react";
import "./Contact.css"; // obok pliku z CSS

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ loading: false, ok: null, text: "" });

    // Wklej tu swój endpoint Formspree (zastąp poniższy)
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovlyajk"; // <- zamień!

    const handleChange = (e) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prosta walidacja
        if (!form.name || !form.email || !form.message) {
            setStatus({ loading: false, ok: false, text: "Uzupełnij wszystkie pola." });
            return;
        }

        setStatus({ loading: true, ok: null, text: "" });

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(formRef.current),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, ok: true, text: "Dziękuję — wiadomość wysłana!" });
                setForm({ name: "", email: "", message: "" });
            } else {
                // Formspree zwraca informacje o błędach w JSON
                setStatus({ loading: false, ok: false, text: data.error || "Błąd wysyłki." });
            }
        } catch (err) {
            setStatus({ loading: false, ok: false, text: "Błąd sieci — spróbuj ponownie." });
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-card">
                <h2>Formularz kontaktowy</h2>
                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Imię
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Twoje imię"
                            required
                        />
                    </label>

                    <label>
                        Email
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="twój@email.pl"
                            required
                        />
                    </label>

                    <label>
                        Wiadomość
                        <textarea
                            name="message"
                            rows="6"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Napisz wiadomość..."
                            required
                        />
                    </label>

                    <button type="submit" disabled={status.loading}>
                        {status.loading ? "Wysyłam..." : "Wyślij wiadomość"}
                    </button>
                </form>

                {status.text && (
                    <div className={`form-status ${status.ok ? "ok" : "error"}`}>
                        {status.text}
                    </div>
                )}
            </div>
        </section>
    );
}
