// src/pages/about/about.js
import React from "react";
import "./About.css";
import {
    FaMapMarkerAlt,
    FaBriefcase,
    FaLanguage,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaCodeBranch,
    FaWindows,
} from "react-icons/fa";
import {
    SiLinux,
    SiDocker,
    SiReact,
    SiJavascript,
    SiPostgresql,
    SiMysql,
    SiGit,
    SiFirebase,
    SiJira,
} from "react-icons/si";

const About = () => {
    return (
        <section id="about" className="about">
            {/* dekoracyjne plamy */}
            <span className="about__blob about__blob--a"></span>
            <span className="about__blob about__blob--b"></span>

            <div className="about__container">
                <header className="about__header animate-fade-in">
                    <h2 className="about__title">
                        O <span>mnie</span>
                    </h2>
                    <p className="about__kicker">
                        Infrastruktura • Automatyzacja • Development
                    </p>
                </header>

                <div className="about__grid">
                    {/* LEWA KOLUMNA – opis */}
                    <div className="about__text animate-slide-up">
                        <p>
                            Cześć! Nazywam się <strong>Tomasz Skorupski</strong>. Od 2018 roku
                            pracuję w IT – od helpdesku, przez administrację systemami i
                            sieciami, po rozwój platform i narzędzi. Łączę{" "}
                            <strong>Windows Server (AD, GPO)</strong>,{" "}
                            <strong>Linux/Bash</strong>, sieci{" "}
                            <strong>TCP/IP, DNS, DHCP, VPN</strong> i bazy danych
                            (<strong>MySQL, PostgreSQL, SQL Server</strong>) z programowaniem
                            w <strong>React/JavaScript</strong> oraz narzędziami{" "}
                            <strong>DevOps</strong> (<strong>Git, Docker, CI/CD</strong>).
                        </p>
                        <p>
                            Obecnie działam w <strong>Streetcom</strong> jako Administrator
                            Systemów IT & Developer Platform – odpowiadam za wsparcie,
                            stabilność środowiska, modernizacje i usprawnienia. Rozwijam się
                            w kierunku roli <strong>Junior DevOps Engineer / Cloud SysAdmin</strong>.
                        </p>

                        <ul className="about__bullets">
                            <li>Projektuję i usprawniam procesy, automatyzuję powtarzalne zadania.</li>
                            <li>Dbam o niezawodność, bezpieczeństwo i przejrzystość systemów.</li>
                            <li>Komunikuję zrozumiale – łączę potrzeby biznesu z technologią.</li>
                        </ul>

                        <div className="about__actions">
                            <a href="#experience" className="btn btn--primary">
                                Zobacz doświadczenie
                            </a>
                            <a href="#contact" className="btn btn--outline">
                                Skontaktuj się
                            </a>
                        </div>

                        <div className="about__social">
                            <a href="mailto:skorupski-tomasz@wp.pl" aria-label="E-mail">
                                <FaEnvelope />
                            </a>
                            <a href="https://github.com/shellupski" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tomasz-skorupski"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* PRAWA KOLUMNA – karta faktów */}
                    <aside className="about__card animate-fade-in delay-1s">
                        <div className="about__fact">
                            <FaMapMarkerAlt />
                            <div>
                                <h4>Lokalizacja</h4>
                                <p>Stargard, Polska • otwarty na zdalnie/hybrydę</p>
                            </div>
                        </div>
                        <div className="about__fact">
                            <FaBriefcase />
                            <div>
                                <h4>Aktualna rola</h4>
                                <p>Administrator IT & Developer Platform – Streetcom</p>
                            </div>
                        </div>
                        <div className="about__fact">
                            <FaLanguage />
                            <div>
                                <h4>Języki</h4>
                                <p>Angielski B2, Niemiecki A1</p>
                            </div>
                        </div>
                        <div className="about__fact">
                            <FaCodeBranch />
                            <div>
                                <h4>Certyfikaty</h4>
                                <p>PHP Developer (Strefa Kursów, 2025), GitHub Copilot (Coders Lab, 2025)</p>
                            </div>
                        </div>

                        <div className="about__divider"></div>

                        <div className="about__mini">
                            <h4>Wybrane projekty</h4>
                            <ul>
                                <li>CMS do Kampanii Influencerskich – poprawki, UX/UI, stabilność (PHP, MySQL, JS, Jira)</li>
                                <li>Mobile Cookbook (PWA) – React + Firebase, offline, responsywność</li>
                            </ul>
                            <a href="#portfolio" className="about__link">
                                Pełne portfolio →
                            </a>
                        </div>
                    </aside>
                </div>

                {/* TECH STACK */}
                <section className="about__tech animate-slide-up delay-2s">
                    <h3>Technologie, które lubię i używam</h3>
                    <div className="about__tech-grid">
                        <span className="chip"><FaWindows /> Windows Server / AD</span>
                        <span className="chip"><SiLinux /> Linux / Bash</span>
                        <span className="chip"><SiDocker /> Docker</span>
                        <span className="chip"><SiGit /> Git / GitLab / GitHub</span>
                        <span className="chip"><SiReact /> React</span>
                        <span className="chip"><SiJavascript /> JavaScript</span>
                        <span className="chip"><SiPostgresql /> PostgreSQL</span>
                        <span className="chip"><SiMysql /> MySQL</span>
                        <span className="chip"><SiFirebase /> Firebase</span>
                        <span className="chip"><SiJira /> Jira</span>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;