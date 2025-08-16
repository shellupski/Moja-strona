import React from 'react';
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// Import grafik do projektów
import zwierzetaThumbnail from './assets/zwierzeta-thumbnail.png'; // Upewnij się, że masz te pliki graficzne
import cookbookThumbnail from './assets/cookbook-thumbnail.png'; // Upewnij się, że masz te pliki graficzne

const projects = [
    {
        id: 1,
        title: 'System Zarządzania Treścią (CMS)',
        subtitle: 'Projekt w ramach zarządzania danymi',
        description: 'Kompleksowa aplikacja webowa, która ułatwia organizację i zarządzanie danymi. Stworzona z myślą o efektywności i prostocie użytkowania, pozwala na łatwe dodawanie, edycję i filtrowanie rekordów.',
        technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'PHP'],
        demoLink: 'https://zwierzeta.netlify.app/#main-page',
        githubLink: 'https://github.com/twoja-nazwa-uzytkownika/nazwa-repo-zwierzeta', // Wprowadź poprawny link
        image: zwierzetaThumbnail,
    },
    {
        id: 2,
        title: 'Mobilna Książka Kucharska (PWA)',
        subtitle: 'Progresywna Aplikacja Webowa',
        description: 'Projekt PWA, który demonstruje zaawansowane możliwości nowoczesnych aplikacji webowych. Aplikacja pozwala na przeglądanie przepisów kulinarnych i działa bez problemu w trybie offline.',
        technologies: ['React', 'Firebase', 'PWA'],
        demoLink: 'https://mobilnaksiazkakucharska.netlify.app',
        githubLink: 'https://github.com/twoja-nazwa-uzytkownika/nazwa-repo-ksiazka-kucharska', // Wprowadź poprawny link
        image: cookbookThumbnail,
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
                        Odkryj efekty mojej pracy. Poniżej prezentuję wybrane projekty, w których łączyłem pasję do programowania z praktycznym zastosowaniem technologii. Od funkcjonalnych aplikacji webowych po narzędzia do zarządzania danymi.
                    </p>
                </header>

                <section className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`project-card animate-slide-up delay-${index + 1}`}>
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
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