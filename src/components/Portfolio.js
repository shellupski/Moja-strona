import React from 'react';
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// Import grafik do projektów
// import zwierzetaThumbnail from './assets/zwierzeta-thumbnail.png'; // jeśli później dodasz miniaturę, możesz odkomentować i użyć
import cookbookThumbnail from './assets/mobile_cook.jpg'; // miniatura PWA
import animalsThumbnail from './assets/one_page_animals.jpg'; // miniatura dla "Interesujące Zwierzęta"

const projects = [
    {
        id: 1,
        title: 'Mobilna Książka Kucharska (PWA)',
        subtitle: 'Progresywna Aplikacja Webowa — projekt dyplomowy',
        description: 'Opracowałem progresywną aplikację webową (PWA), która pomaga w planowaniu posiłków na podstawie składników dostępnych w kuchni. Integruje bazę przepisów, instrukcje przygotowania i czasy gotowania dodatków, a wbudowany timer z powiadomieniem dźwiękowym ułatwia kontrolę procesu. Aplikacja została zaprojektowana w podejściu mobile‑first i działa również w trybie offline, pozostając dostępna na każdym urządzeniu z przeglądarką. Dzięki temu realnie skraca czas spędzany na gotowaniu i ułatwia podejmowanie decyzji „co ugotować”. Projekt zrealizowany w oparciu o React z naciskiem na wydajność i wygodę użytkownika. Powstał jako element pracy dyplomowej.',
        technologies: ['React', 'Firebase', 'PWA'],
        demoLink: 'https://mobilnaksiazkakucharska.netlify.app',
        githubLink: 'https://github.com/shellupski/Mobilna-ksiazka-kucharska', // zaktualizowany link do repo
        image: cookbookThumbnail,
    },
    {
        id: 2,
        title: 'Interesujące Zwierzęta - One Page',
        subtitle: 'Prosta strona typu One Page (projekt studencki)',
        description:
            'Bardzo prosta, statyczna strona one page przygotowana w trakcie studiów jako realizacja jednego z zadań. Prezentuje wybrane, interesujące gatunki zwierząt w krótkich sekcjach — z podstawowymi informacjami i ciekawostkami. Traktuję ją jako skromny materiał uzupełniający, pokazujący konsekwencję w dokumentowaniu postępów. Mam świadomość, że nie jest to projekt reprezentatywny dla obecnych umiejętności i wkrótce zastąpię go nowszymi, autorskimi realizacjami.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://zwierzeta.netlify.app/#fourty-page',
        githubLink: 'https://github.com/shellupski/Strona-typu-One-Page',
        image: animalsThumbnail,
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="gradient-background"></div>
            <div className="content-wrapper">
                <header className="portfolio-header animate-fade-in">
                    <h1 className="portfolio-title">Portfolio</h1>
                    <p className="portfolio-subtitle">
                        Moje publiczne portfolio jest obecnie skromne, ponieważ większość dotychczasowych realizacji powstawała na rzecz pracodawców i pozostaje objęta ograniczeniami w udostępnianiu. Równolegle tworzę serię autorskich projektów demonstracyjnych — wkrótce pojawią się tutaj nowe pozycje. Wszystkie, w tym także mniejsze i eksperymentalne prace, publikuję na
                        {' '}
                        <a href="https://github.com/shellupski" target="_blank" rel="noopener noreferrer">GitHubie</a>.
                    </p>
                </header>

                <section className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`project-card animate-slide-up delay-${index + 1}`}>
                            {project.image && (
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </div>
                            )}
                            <div className="project-content">
                                <h3 className="project-heading">{project.title}</h3>
                                <h4 className="project-subtitle">{project.subtitle}</h4>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaExternalLinkAlt /> Zobacz Demo
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> Kod
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Portfolio;