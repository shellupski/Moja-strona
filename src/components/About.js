// src/pages/about/about.js
import React from "react";
import { HashLink } from "react-router-hash-link";
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
import { useTranslation, Trans } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="about">
            {/* dekoracyjne plamy */}
            <span className="about__blob about__blob--a"></span>
            <span className="about__blob about__blob--b"></span>

            <div className="about__container">
                <header className="about__header animate-fade-in">
                    <h2 className="about__title">
                        {t("about.title").split(" ")[0]} <span>{t("about.title").split(" ")[1] || ""}</span>
                    </h2>
                    <p className="about__kicker">
                        {t("about.kicker")}
                    </p>
                </header>

                <div className="about__grid">
                    {/* LEWA KOLUMNA – opis */}
                    <div className="about__text animate-slide-up">
                        <p>
                            <Trans i18nKey="about.p1" components={{ strong: <strong /> }} />
                        </p>
                        <p>
                            <Trans i18nKey="about.p2" components={{ strong: <strong /> }} />
                        </p>
                        <p>
                            <Trans i18nKey="about.p3" />
                        </p>

                        <ul className="about__bullets">
                            <li>{t("about.bullets.0")}</li>
                            <li>{t("about.bullets.1")}</li>
                            <li>{t("about.bullets.2")}</li>
                        </ul>

                        <div className="about__actions">
                            <HashLink smooth to="/experience#experience" className="btn btn--primary">
                                {t("about.ctaExperience")}
                            </HashLink>
                            <HashLink smooth to="/contact#contact" className="btn btn--outline">
                                {t("about.ctaContact")}
                            </HashLink>
                        </div>

                        <div className="about__social">
                            <a href="mailto:skorupski-tomasz@wp.pl" aria-label={t("about.social.emailAria")} target="_blank" rel="noopener noreferrer">
                                <FaEnvelope />
                            </a>
                            <a href="https://github.com/shellupski" aria-label={t("about.social.githubAria")} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tomasz-skorupski"
                                aria-label={t("about.social.linkedinAria")}
                                target="_blank"
                                rel="noopener noreferrer"
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
                                <h4>{t("about.facts.locationTitle")}</h4>
                                <p>{t("about.facts.locationValue")}</p>
                            </div>
                        </div>
                        <div className="about__fact">
                            <FaBriefcase />
                            <div>
                                <h4>{t("about.facts.statusTitle")}</h4>
                                <p>{t("about.facts.statusValue")}</p>
                            </div>
                        </div>
                        <div className="about__fact">
                            <FaLanguage />
                            <div>
                                <h4>{t("about.facts.languagesTitle")}</h4>
                                <p>{t("about.facts.languagesValue")}</p>
                            </div>
                        </div>
                        <div className="about__fact">
                            <FaCodeBranch />
                            <div>
                                <h4>{t("about.facts.certsTitle")}</h4>
                                <p>{t("about.facts.certsValue")}</p>
                            </div>
                        </div>
                        {/* usunięto: about__divider + blok "Wybrane projekty" */}
                    </aside>
                </div>

                {/* TECH STACK */}
                <section className="about__tech animate-slide-up delay-2s">
                    <h3>{t("about.techTitle")}</h3>
                    <div className="about__tech-grid">
                        <span className="chip"><FaWindows /> {t("about.techChips.win")}</span>
                        <span className="chip"><SiLinux /> {t("about.techChips.linux")}</span>
                        <span className="chip"><SiDocker /> {t("about.techChips.docker")}</span>
                        <span className="chip"><SiGit /> {t("about.techChips.git")}</span>
                        <span className="chip"><SiReact /> {t("about.techChips.react")}</span>
                        <span className="chip"><SiJavascript /> {t("about.techChips.js")}</span>
                        <span className="chip"><SiPostgresql /> {t("about.techChips.pg")}</span>
                        <span className="chip"><SiMysql /> {t("about.techChips.mysql")}</span>
                        <span className="chip"><SiFirebase /> {t("about.techChips.firebase")}</span>
                        <span className="chip"><SiJira /> {t("about.techChips.jira")}</span>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;