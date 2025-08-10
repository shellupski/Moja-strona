// src/components/Contact.js
import React, { useState, useRef } from "react";
import "./Contact.css"; // Upewnij się, że ten plik istnieje obok

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ loading: false, ok: null, text: "" });

    // Pamiętaj, aby użyć swojego endpointu Formspree
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovlyajk";

    const handleChange = (e) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                setStatus({ loading: false, ok: false, text: data.error || "Błąd wysyłki." });
            }
        } catch (err) {
            setStatus({ loading: false, ok: false, text: "Błąd sieci — spróbuj ponownie." });
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-card">
                {/* === ZMIANA 1: Nowy, bardziej stylowy nagłówek === */}
                <div className="contact-header">
                    <h2>Formularz kontaktowy</h2>
                    <p className="contact-subtitle">
                        Masz pytanie lub propozycję współpracy? Wypełnij formularz lub napisz do mnie bezpośrednio.
                    </p>
                </div>

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

                {/* === ZMIANA 2: Dodana sekcja z bezpośrednim e-mailem === */}
                <hr className="or-divider" />

                <div className="direct-email-container">
                    <p>Lub napisz bezpośrednio na:</p>
                    <a href="mailto:crusty.it.office@gmail.com">
                        crusty.it.office@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}