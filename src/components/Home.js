// src/sections/home.js
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { HashLink } from 'react-router-hash-link';

// Opcjonalnie podmień ścieżkę do avatara/CV w /public
const AVATAR = "https://raw.githubusercontent.com/shellupski/Moja-strona/main/images/logo_vertical.svg"; // jeśli nie masz zdjęcia, zostaw pusty string
const CV_FILE = "/Tomasz_Skorupski_CV.pdf";

const ROLES = [
    "Specjalista IT",
    "SysAdmin",
    "Junior DevOps (w drodze)",
    "Web Developer (React/PWA)",
    "Administrator Baz Danych",
];

const TECH = [
    "Windows Server • AD/GPO",
    "Linux/Bash",
    "TCP/IP • DNS • DHCP • VPN",
    "Routery • Switche • Firewalle",
    "MySQL (zaaw.) • PostgreSQL",
    "Docker • Git • CI/CD",
    "AWS/Azure/GCP (podstawy)",
    "React • PHP • Jira",
];

export default function Home() {
    const [subIndex, setSubIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typewriter effect for ROLES
    useEffect(() => {
        if (reverse) {
            if (subIndex === 0) {
                setReverse(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
                return;
            }
        } else if (subIndex === ROLES[roleIndex].length + 1) {
            const t = setTimeout(() => setReverse(true), 950);
            return () => clearTimeout(t);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 38 : 85);

        return () => clearTimeout(timeout);
    }, [subIndex, roleIndex, reverse]);

    // Caret blink
    useEffect(() => {
        const blinkTimer = setInterval(() => setBlink((b) => !b), 420);
        return () => clearInterval(blinkTimer);
    }, []);

    // Magnetic glow for CTA buttons
    const handleMagnet = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
    };

    // Smooth scroll helpers
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Adresy do CV w repo (RAW + CDN fallback)
    const GITHUB_CV_RAW = 'https://raw.githubusercontent.com/shellupski/Moja-strona/main/public/cv/CV.pdf';
    const GITHUB_CV_CDN = 'https://cdn.jsdelivr.net/gh/shellupski/Moja-strona@main/public/cv/CV.pdf';

    // Wymuszone pobieranie CV (fetch -> blob -> download), z fallbackami
    const downloadCV = async (e) => {
        e.preventDefault();
        const tryDownload = async (url) => {
            const res = await fetch(url, { mode: 'cors', cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const blob = await res.blob();
            const objUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = objUrl;
            a.download = 'CV.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(objUrl);
        };

        try {
            await tryDownload(GITHUB_CV_RAW);         // 1) RAW GitHub
        } catch (_) {
            try {
                await tryDownload(GITHUB_CV_CDN);     // 2) jsDelivr CDN fallback
            } catch {
                window.open(GITHUB_CV_RAW, '_blank', 'noopener,noreferrer'); // 3) otwórz w nowej karcie
            }
        }
    };

    return (
        <section id="home" className="home">
            {/* Decorative background */}
            <div className="aurora" aria-hidden="true" />
            <div className="stars" aria-hidden="true" />

            <div className="home__inner">
                {/* Left: Hero copy */}
                <div className="hero glass">
                    <div className="hero__eyebrow">Crusty IT • Portfolio</div>

                    <h1 className="hero__title">
                        Cześć, nazywam się
                        <span className="gradient-text"> Tomasz Skorupski</span>
                    </h1>

                    <h2 className="hero__subtitle">
                        {ROLES[roleIndex].substring(0, subIndex)}
                        <span className={`caret ${blink ? "is-on" : ""}`} />
                    </h2>

                    <p className="hero__lead">
                        Jestem specjalistą IT z szerokim przekrojem doświadczeń: administracja Windows/AD i Linux, sieci oraz bazy danych — sprawnie łączę różne technologie w praktyczne rozwiązania. Pracowałem przy modernizacji infrastruktury i usprawnianiu procesów, dbając o stabilność systemów i komfort użytkowników. Uczciwie: nie mam jeszcze komercyjnego doświadczenia DevOps; intensywnie się tego uczę i rozwijam własny projekt (Git, Docker, podstawowe pipeline’y CI/CD). Moje mocne strony to szybkie odnajdywanie się w nowych narzędziach, komunikacja, dokumentacja i ciągła chęć nauki. Jestem otwarty na zdalne role — nie tylko w obszarze DevOps, ale również w administracji/systemach i pokrewnych. Szukam miejsca, w którym będę mógł wnosić wartość od pierwszego dnia i równolegle rozwijać kompetencje chmurowe i automatyzacyjne.                    </p>

                    <div className="hero__cta">
                        <HashLink
                            className="btn-glow"
                            onMouseMove={handleMagnet}
                            smooth
                            to="/portfolio#portfolio"
                        >
                            <span>🚀 Zobacz portfolio</span>
                        </HashLink>

                        <a
                            className="btn-glass"
                            onMouseMove={handleMagnet}
                            href={GITHUB_CV_RAW}        // bezpośredni adres (działa też jako fallback)
                            onClick={downloadCV}        // wymuszenie pobrania przez blob
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📄 Pobierz CV
                        </a>

                        <HashLink
                            className="btn-ghost"
                            onMouseMove={handleMagnet}
                            smooth
                            to="/contact#contact"
                        >
                            ✉️ Kontakt
                        </HashLink>
                    </div>

                    <div className="hero__meta">
                        <div className="stat">
                            <div className="stat__num">7+</div>
                            <div className="stat__label">lat w IT</div>
                        </div>
                        <div className="stat">
                            <div className="stat__num">2</div>
                            <div className="stat__label">projekty własne (CMS, PWA)</div>
                        </div>
                        <div className="stat">
                            <div className="stat__num">B2</div>
                            <div className="stat__label">angielski</div>
                        </div>
                        <div className="stat">
                            <div className="stat__num">DevOps</div>
                            <div className="stat__label">Docker • Git • CI/CD</div>
                        </div>
                    </div>

                    <div className="tech-tags">
                        {TECH.map((t) => (
                            <span className="tag" key={t}>
                {t}
              </span>
                        ))}
                    </div>

                    <div className="quick-contact">
                        <a
                            className="chip"
                            href="mailto:skorupski-tomasz@wp.pl"
                            aria-label="Email"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                <path
                                    fill="currentColor"
                                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.236-6.928 4.334a2 2 0 0 1-2.144 0L4 8.236V6l8 5 8-5v2.236Z"
                                />
                            </svg>
                            <span>skorupski-tomasz@wp.pl</span>
                        </a>

                        <a className="chip" href="tel:+48516382534" aria-label="Telefon">
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                <path
                                    fill="currentColor"
                                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1v3.58a1 1 0 0 1-1 1A17.94 17.94 0 0 1 2 6a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1.01l-2.3 2.22Z"
                                />
                            </svg>
                            <span>+48 516 382 534</span>
                        </a>

                        <a
                            className="chip"
                            href="https://github.com/shellupski"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                <path
                                    fill="currentColor"
                                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.62.07-.6.07-.6 1.02.07 1.56 1.05 1.56 1.05 .91 1.56 2.39 1.11 2.97.85.09-.66.36-1.11.65-1.37-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02 .55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.37.32.69.94.69 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47A10 10 0 0 0 12 2Z"
                                />
                            </svg>
                            <span>github.com/shellupski</span>
                        </a>
                    </div>
                </div>

                {/* Right: Avatar / floating card */}
                <div className="hero-visual">
                    <div className="visual-orb" aria-hidden="true" />
                    <div className="visual-card glass">
                        <div className="badge">Stargard, PL</div>
                        {AVATAR ? (
                            <img className="avatar" src={AVATAR} alt="Avatar" />
                        ) : (
                            <div className="avatar placeholder">TS</div>
                        )}
                        <div className="visual-caption">
                            Stabilność • Automatyzacja • Bezpieczeństwo
                        </div>
                    </div>
                </div>
            </div>

            <button
                className="scroll-hint"
                onClick={() => scrollToId("about")}
                aria-label="Przewiń do sekcji About"
            >
                <span>Przewiń</span>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 5v14m0 0l-5-5m5 5l5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </section>
    );
}