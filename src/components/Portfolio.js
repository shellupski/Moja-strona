import React from 'react';
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import cookbookThumbnail from './assets/mobile_cook.jpg';
import animalsThumbnail from './assets/one_page_animals.jpg';
import { useTranslation, Trans } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "pwaCookbook",
      image: cookbookThumbnail,
      demoLink: 'https://mobilnaksiazkakucharska.netlify.app',
      githubLink: 'https://github.com/shellupski/Mobilna-ksiazka-kucharska',
      title: t('portfolio.projects.pwaCookbook.title'),
      subtitle: t('portfolio.projects.pwaCookbook.subtitle'),
      description: t('portfolio.projects.pwaCookbook.description'),
      technologies: t('portfolio.projects.pwaCookbook.tech', { returnObjects: true })
    },
    {
      id: "animalsOnePage",
      image: animalsThumbnail,
      demoLink: 'https://zwierzeta.netlify.app/#fourty-page',
      githubLink: 'https://github.com/shellupski/Strona-typu-One-Page',
      title: t('portfolio.projects.animalsOnePage.title'),
      subtitle: t('portfolio.projects.animalsOnePage.subtitle'),
      description: t('portfolio.projects.animalsOnePage.description'),
      technologies: t('portfolio.projects.animalsOnePage.tech', { returnObjects: true })
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="gradient-background"></div>
      <div className="content-wrapper">
        <header className="portfolio-header animate-fade-in">
          <h1 className="portfolio-title">{t('portfolio.title')}</h1>
          <p className="portfolio-subtitle">
            <Trans
              i18nKey="portfolio.subtitleHtml"
              components={{
                link: <a href="https://github.com/shellupski" target="_blank" rel="noopener noreferrer" />
              }}
            />
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
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> {t('portfolio.actions.demo')}
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> {t('portfolio.actions.code')}
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