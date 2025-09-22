import React from "react";
import "./Experience.css";
import {
    FaBuilding,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaServer,
    FaNetworkWired,
    FaDatabase,
    FaPrint,
    FaCode,
    FaCogs,
} from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience" className="exp">
            <div className="exp__container">
                <header className="exp__header">
                    <h2 className="exp__title">
                        Doświadczenie <span>zawodowe</span>
                    </h2>
                    <p className="exp__kicker">Stabilność • Automatyzacja • Wsparcie • Development</p>
                </header>

                <ol className="exp__timeline">
                    {/* Streetcom */}
                    <li className="exp__item">
                        <div className="exp__pin" aria-hidden="true" />
                        <div className="exp__card">
                            <div className="exp__top">
                                <div className="exp__where">
                                    <FaBuilding /> Streetcom • Administrator Systemów IT & Developer Platform
                                </div>
                                <div className="exp__meta">
                                    <span className="exp__meta-item"><FaCalendarAlt /> 07.2024 – obecnie</span>
                                    <span className="exp__meta-item"><FaMapMarkerAlt /> Warszawa / zdalnie</span>
                                </div>
                            </div>
                            <ul className="exp__bullets">
                                <li>Kompleksowa obsługa IT, administracja systemami i bazami danych, modernizacja i usprawnienia.</li>
                                <li>Rozwiązywanie problemów funkcjonalnych, poprawa niezawodności i doświadczeń użytkowników.</li>
                                <li>Udział w inicjatywach dot. automatyzacji i optymalizacji procesów.</li>
                            </ul>
                            <div className="exp__tags">
                                <span className="tag"><FaServer /> Windows/Linux</span>
                                <span className="tag"><FaNetworkWired /> TCP/IP, DNS, VPN</span>
                                <span className="tag"><FaDatabase /> MySQL</span>
                                <span className="tag"><FaCode /> Git/Jira</span>
                            </div>
                        </div>
                    </li>

                    {/* ATA */}
                    <li className="exp__item">
                        <div className="exp__pin" aria-hidden="true" />
                        <div className="exp__card">
                            <div className="exp__top">
                                <div className="exp__where">
                                    <FaBuilding /> ATA • Specjalista IT (integracja systemów druku)
                                </div>
                                <div className="exp__meta">
                                    <span className="exp__meta-item"><FaCalendarAlt /> 04.2023 – 09.2023</span>
                                    <span className="exp__meta-item"><FaMapMarkerAlt /> Szczecin</span>
                                </div>
                            </div>
                            <ul className="exp__bullets">
                                <li>Wdrażanie i integracja systemów druku podążającego, pełne wsparcie techniczne klientów.</li>
                                <li>Optymalizacja infrastruktury sieciowej i poprawa stabilności środowisk.</li>
                                <li>Centralny nadzór nad urządzeniami drukującymi u klientów.</li>
                            </ul>
                            <div className="exp__tags">
                                <span className="tag"><FaPrint /> Systemy druku</span>
                                <span className="tag"><FaNetworkWired /> Sieci</span>
                                <span className="tag"><FaCogs /> Monitoring/Optymalizacja</span>
                            </div>
                        </div>
                    </li>

                    {/* Hisert */}
                    <li className="exp__item">
                        <div className="exp__pin" aria-hidden="true" />
                        <div className="exp__card">
                            <div className="exp__top">
                                <div className="exp__where">
                                    <FaBuilding /> Hisert • Specjalista ds. Wsparcia IT
                                </div>
                                <div className="exp__meta">
                                    <span className="exp__meta-item"><FaCalendarAlt /> 01.2022 – 04.2023</span>
                                    <span className="exp__meta-item"><FaMapMarkerAlt /> Szczecin</span>
                                </div>
                            </div>
                            <ul className="exp__bullets">
                                <li>Administracja systemami i siecią, wdrażanie nowych technologii, modernizacja infrastruktury.</li>
                                <li>Budowa nowej serwerowni od podstaw, montaż i konfiguracja sprzętu sieciowego.</li>
                                <li>Zapewnienie sprawnego działania aplikacji wykorzystywanych przez użytkowników końcowych.</li>
                            </ul>
                            <div className="exp__tags">
                                <span className="tag"><FaServer /> Serwery</span>
                                <span className="tag"><FaNetworkWired /> Sieć LAN/WAN</span>
                                <span className="tag"><FaDatabase /> Backup</span>
                            </div>
                        </div>
                    </li>

                    {/* RZGW */}
                    <li className="exp__item">
                        <div className="exp__pin" aria-hidden="true" />
                        <div className="exp__card">
                            <div className="exp__top">
                                <div className="exp__where">
                                    <FaBuilding /> RZGW • Młodszy specjalista ds. IT
                                </div>
                                <div className="exp__meta">
                                    <span className="exp__meta-item"><FaCalendarAlt /> 05.2021 – 10.2021</span>
                                    <span className="exp__meta-item"><FaMapMarkerAlt /> Szczecin</span>
                                </div>
                            </div>
                            <ul className="exp__bullets">
                                <li>Konfiguracja i nadzór nad systemami IT oraz administracja infrastrukturą sieciową.</li>
                                <li>Wsparcie użytkowników, rozwiązywanie bieżących problemów.</li>
                                <li>Zapewnienie stałej dostępności systemów.</li>
                            </ul>
                            <div className="exp__tags">
                                <span className="tag"><FaNetworkWired /> Sieci</span>
                                <span className="tag"><FaServer /> Windows</span>
                            </div>
                        </div>
                    </li>

                    {/* Exorigo-Upos */}
                    <li className="exp__item">
                        <div className="exp__pin" aria-hidden="true" />
                        <div className="exp__card">
                            <div className="exp__top">
                                <div className="exp__where">
                                    <FaBuilding /> Exorigo‑Upos • Technik Serwisu IT / Serwis Terenowy
                                </div>
                                <div className="exp__meta">
                                    <span className="exp__meta-item"><FaCalendarAlt /> 10.2020 – 05.2021</span>
                                    <span className="exp__meta-item"><FaMapMarkerAlt /> Szczecin (sieci handlowe)</span>
                                </div>
                            </div>
                            <ul className="exp__bullets">
                                <li>Wsparcie IT dla sieci retail: zgłoszenia serwisowe, diagnoza i naprawa sprzętu (POS).</li>
                                <li>Konfiguracja sieci i urządzeń, inwentaryzacja zasobów IT.</li>
                                <li>Serwis urządzeń fiskalnych – skuteczne rozwiązywanie zróżnicowanych problemów w wielu lokalizacjach.</li>
                            </ul>
                            <div className="exp__tags">
                                <span className="tag"><FaCogs /> POS/Serwis</span>
                                <span className="tag"><FaNetworkWired /> Konfiguracje</span>
                            </div>
                        </div>
                    </li>
                    <li className="exp__item">
                        <div className="exp__pin" aria-hidden="true" />
                        <div className="exp__card">
                            <div className="exp__top">
                                <div className="exp__where">
                                    <FaBuilding /> WASKO S.A. • Technik mobilny
                                </div>
                                <div className="exp__meta">
                                    <span className="exp__meta-item"><FaCalendarAlt /> 06.2020 – 09.2020</span>
                                    <span className="exp__meta-item"><FaMapMarkerAlt /> Szczecin</span>
                                </div>
                            </div>
                            <ul className="exp__bullets">
                                <li>Serwis i konfiguracja urządzeń drukujących oraz wsparcie sprzętu użytkowników w oddziałach banków.</li>
                                <li>Diagnoza problemów na miejscu u klienta i przywracanie ciągłości pracy.</li>
                                <li>Przygotowanie, konfiguracja i uruchamianie nowego sprzętu w terenie.</li>
                            </ul>
                        </div>
                    </li>
                    {/* EOT */}
                    <li className="exp__item">
                        <div className="exp__pin" aria-hidden="true" />
                        <div className="exp__card">
                            <div className="exp__top">
                                <div className="exp__where">
                                    <FaBuilding /> EOT • Helpdesk (zdalny)
                                </div>
                                <div className="exp__meta">
                                    <span className="exp__meta-item"><FaCalendarAlt /> 09.2018 – 03.2019</span>
                                    <span className="exp__meta-item"><FaMapMarkerAlt /> Szczecin</span>
                                </div>
                            </div>
                            <ul className="exp__bullets">
                                <li>Zdalne wsparcie IT dla szpitali i zespołów ratownictwa medycznego.</li>
                                <li>Obsługa zgłoszeń: diagnostyka, rozwiązywanie incydentów, eskalacje.</li>
                                <li>Konfiguracje i zmiany: stacje robocze, aplikacje medyczne, uprawnienia.</li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Experience;