
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

function About() {
    
    const { ref, inView } = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });

    return (
        <section
            ref={ref}
            id="about"
            className={`${styles.aboutSection} ${inView ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                {/* العنوان */}
                <div className={styles.header}>
                    <p className={styles.tag}>About Me</p>
                    <h2>Who I Am</h2>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.contentGrid}>
                    {/* الجانب الأيسر: النبذة التعريفية */}
                    <div className={styles.textContent}>
                        <h3>Personal Background</h3>
                        <p className={styles.bio}>
                I'm <strong>Hazem Ziead</strong>, a passionate Front-End Developer
                with a keen eye for design and a love for creating seamless,
                interactive web experiences. I specialize in turning complex ideas
                into clean, responsive, and user-friendly interfaces.
                </p>
                <p className={styles.bio}>
                With a strong foundation in modern JavaScript frameworks and a
                commitment to staying up-to-date with the latest web technologies,
                I strive to deliver high-quality code that not only works
                flawlessly but also delights users.
                </p>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>2+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>5+</span>
                        <span className={styles.statLabel}>Happy Clients</span>
                    </div>
            </div>
            </div>

            {/* الجانب الأيمن: بطاقات المهارات */}
            <div className={styles.skillsContainer}>
                <h3 className={styles.skillsTitle}>My Skills</h3>
                <div className={styles.skillsGrid}>
                    <div className={styles.skillCard}>
                        <div className={styles.skillIconWrapper}>
                            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 16 4-4-4-4" />
                                <path d="m6 8-4 4 4 4" />
                                <path d="m14.5 4-5 16" />
                            </svg>
                        </div>
                        <h4>HTML & CSS</h4>
                        <p>Flexbox, Grid, Animation</p>
                    </div>

                    <div className={styles.skillCard}>
                        <div className={styles.skillIconWrapper}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M3 3h18v18H3V3zm11.5 14.5c1.8 0 3-1 3-2.7 0-1.8-1.2-2.5-2.6-3.1l-.5-.2c-.8-.3-1.2-.6-1.2-1.2 0-.6.5-1 1.2-1 .7 0 1.2.3 1.6.8l1.3-1.1c-.8-.9-1.8-1.4-2.9-1.4-1.8 0-2.9 1.1-2.9 2.6 0 1.6 1 2.3 2.3 2.9l.5.2c.9.4 1.5.7 1.5 1.4 0 .7-.6 1.1-1.4 1.1-.9 0-1.5-.5-1.9-1.2l-1.4 1c.7 1.1 1.8 1.7 3.1 1.7zm-6.2-.2h1.8V9.5H8.3v6c0 .7-.4 1.1-1 1.1-.3 0-.6-.1-.8-.2l-.4 1.5c.5.3 1.1.4 1.8.4.2 0 .4 0 .4-.1z" />
                            </svg>
                        </div>
                        <h4>JavaScript</h4>
                        <p>ES6+, DOM, Async/Await</p>
                    </div>

                    <div className={styles.skillCard}>
                        <div className={styles.skillIconWrapper}>
                            <svg className={styles.reactIcon} viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
                                <circle cx="12" cy="12" r="1.8" fill="currentColor" />
                            </svg>
                        </div>
                        <h4>React</h4>
                        <p>Hooks, Context, Router</p>
                    </div>

                    <div className={styles.skillCard}>
                        <div className={styles.skillIconWrapper}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M3 3h18v18H3V3zm7.2 6.3H5.8v1.7h1.6v6.7h1.9v-6.7h1.6V9.3h-.7zm7.5 4.8c-.3-.2-.8-.4-1.4-.7-.6-.2-.9-.5-.9-.9 0-.4.3-.7.8-.7.5 0 .9.2 1.3.6l1.2-1.3c-.6-.6-1.5-1-2.5-1-1.7 0-2.8 1-2.8 2.5 0 .9.5 1.7 1.5 2.1.4.2.9.4 1.4.6.6.3.9.5.9 1 0 .5-.4.8-1 .8-.7 0-1.2-.3-1.6-.9l-1.3 1.2c.7.9 1.7 1.4 2.9 1.4 1.8 0 3-1 3-2.6 0-1-.6-1.7-1.8-2.1z" />
                            </svg>
                        </div>
                        <h4>TypeScript</h4>
                        <p>Type Safety, Interfaces</p>
                    </div>
                    
                    <div className={styles.skillCard}>
                        <div className={styles.skillIconWrapper}>
                            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="14" height="10" x="2" y="3" rx="2" />
                                <path d="M6 17h6" />
                                <path d="M9 13v4" />
                                <rect width="6" height="11" x="16" y="9" rx="1.5" />
                                <circle cx="19" cy="17" r="0.5" fill="currentColor" />
                            </svg>
                        </div>
                        <h4>Responsive Design</h4>
                        <p>Mobile-First, Tailwind</p>
                    </div>

                    <div className={styles.skillCard}>
                        <div className={styles.skillIconWrapper}>
                            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="6" r="3" />
                                <circle cx="6" cy="6" r="3" />
                                <circle cx="6" cy="18" r="3" />
                                <line x1="6" y1="9" x2="6" y2="15" />
                                <path d="M9 18h3a6 6 0 0 0 6-6V9" />
                            </svg>
                        </div>
                        <h4>Git & GitHub</h4>
                        <p>Version Control, CI/CD</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default About;