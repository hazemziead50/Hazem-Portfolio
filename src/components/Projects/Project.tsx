import { useInView } from 'react-intersection-observer';
import styles from './Project.module.css';

// استيراد صور المشاريع (يفضل وضعها في مجلد assets)
import project1 from '../../assets/Project1.png';
import project2 from '../../assets/Project2.png';
import project3 from '../../assets/Project3.png';

// بيانات المشاريع (يمكنك تعديلها حسب مشاريعك الفعلية)
const projectsData = [
  {
    id: 1,
    title: 'Smart Atm System',
    description: 'A full-featured ATM banking simulation built with React, TypeScript, and Zustand. It allows users to log in, check balances, deposit/withdraw, transfer funds, view transaction history, track exchange rates, and toggle dark/light mode.',
    image: project1,
    tags: ['React', 'TypeScript', 'API',' Zustand' ],
    liveLink: 'https://hazemziead50.github.io/Smart-ATM-System/',
    codeLink: 'https://github.com/hazemziead50/Smart-ATM-System',
  },
  {
    id: 2,
    title: 'Quiz App',
    description: 'A web-based Quiz Application built using Object-Oriented Programming (OOP) principles in JavaScript. The app allows users to answer multiple-choice questions, track their score, and view results at the end.',
    image: project2,
    tags: [ 'JavaScript','Modules' ],
    liveLink: 'https://hazemziead50.github.io/Quiz-App-OOP/',
    codeLink: 'https://github.com/hazemziead50/Quiz-App-OOP',
  },
  {
    id: 3,
    title: 'Prayer Times',
    description: 'A web app for global prayer times based on location, featuring an automatic next-prayer finder and a real-time countdown timer to the Adhan.',
    image: project3,
    tags: [ 'TypeScript', 'API'],
    liveLink: 'https://hazemziead50.github.io/Prayer-Times/',
    codeLink: 'https://github.com/hazemziead50/Prayer-Times',
  },
];

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className={`${styles.projectsSection} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* العنوان */}
        <div className={styles.header}>
          <p className={styles.tag}>Portfolio</p>
          <h2>My Projects</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Here are some of the projects I've worked on recently
          </p>
        </div>

        {/* شبكة المشاريع */}
        <div className={styles.projectsGrid}>
          {projectsData.map((project,index)=>(
            <div key={project.id}
              className={styles.projectCard}
              style={{ transitionDelay:`${index * 0.15}s`}} >

              <div className={styles.cardImage}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{ project.description}</p>
                <div className={styles.tags}>
                {project.tags.map((tags)=>(
                  <span key={tags} className={styles.tagItem}>
                    {tags}
                  </span>
                ))}
              </div>

              <div className={styles.cardActions}>
                <a 
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.primaryBtn}
                    >
                    <span>Live Demo</span>
                    <svg className={styles.btnIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>

                <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryBtn}
                    >
                    <svg className={styles.btnIcon} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Source Code</span>
                </a>
              </div>
              </div>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;