// src/components/Contact.js
import React, { useState, useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState({ loading: false, ok: null, text: "" });

  // Użyj własnego endpointu
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovlyajk";

  const emailOk = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).toLowerCase());

  const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = "Podaj imię.";
    if (!values.email.trim()) errors.email = "Podaj adres e‑mail.";
    else if (!emailOk(values.email)) errors.email = "Nieprawidłowy adres e‑mail.";
    if (!values.message.trim()) errors.message = "Wpisz treść wiadomości.";
    return errors;
  };

  const errors = validate(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // pokaż błędy dla wszystkich pól
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length) {
      setStatus({ loading: false, ok: false, text: "Uzupełnij poprawnie zaznaczone pola." });
      return;
    }

    setStatus({ loading: true, ok: null, text: "" });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formRef.current)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus({ loading: false, ok: true, text: "Dziękuję — wiadomość wysłana!" });
        setForm({ name: "", email: "", message: "" });
        setTouched({ name: false, email: false, message: false });
      } else {
        setStatus({ loading: false, ok: false, text: data.error || "Błąd wysyłki." });
      }
    } catch {
      setStatus({ loading: false, ok: false, text: "Błąd sieci — spróbuj ponownie." });
    }
  };

  const fieldClass = (key) =>
    touched[key] && errors[key] ? "field has-error" : "field";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-header">
          <h2>Formularz kontaktowy</h2>
          <p className="contact-subtitle">
            Masz pytanie lub propozycję współpracy? Wypełnij formularz lub napisz do mnie bezpośrednio.
          </p>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className={fieldClass("name")}>
            Imię
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Twoje imię"
              aria-invalid={touched.name && !!errors.name}
              aria-describedby="err-name"
            />
            {touched.name && errors.name && (
              <span id="err-name" className="error-text" role="alert">
                {errors.name}
              </span>
            )}
          </label>

          <label className={fieldClass("email")}>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="twoj@email.pl"
              aria-invalid={touched.email && !!errors.email}
              aria-describedby="err-email"
            />
            {touched.email && errors.email && (
              <span id="err-email" className="error-text" role="alert">
                {errors.email}
              </span>
            )}
          </label>

          <label className={fieldClass("message")}>
            Wiadomość
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Napisz wiadomość..."
              aria-invalid={touched.message && !!errors.message}
              aria-describedby="err-message"
            />
            {touched.message && errors.message && (
              <span id="err-message" className="error-text" role="alert">
                {errors.message}
              </span>
            )}
          </label>

          <button type="submit" disabled={status.loading}>
            {status.loading ? "Wysyłam..." : "Wyślij wiadomość"}
          </button>
        </form>

        {status.text && (
          <div
            className={`form-status ${status.ok ? "ok" : "error"}`}
            role="status"
            aria-live="polite"
          >
            {status.text}
          </div>
        )}

        <hr className="or-divider" />

        <div className="direct-email-container">
          <p>Lub napisz bezpośrednio na:</p>
          <a href="mailto:crusty.it.office@gmail.com">crusty.it.office@gmail.com</a>
        </div>
      </div>
    </section>
  );
}