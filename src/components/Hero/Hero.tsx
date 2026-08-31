import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/1.jpg';

function Hero() {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Front-End Developer';

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 120);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <p className={styles.greeting}>Hello<span>.</span></p>
                    <h1 className={styles.nameHeading}>
                        I'm <span>Hazem Ziead</span>
                    </h1>

                    <h2 className={styles.typewriterHeading}>
                        <span className={styles.typewriterText}>{displayText}</span>
                    </h2>

                    <p className={styles.description}>
                        I build modern, responsive, and user-friendly web applications
                        using React and TypeScript.
                    </p>
                    <div className={styles.actions}>
                        <a href="#contact" className={styles.primaryButton}>
                            <span>Get in Touch</span>
                            <svg className={styles.btnIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href={`${import.meta.env.BASE_URL}Hazem_Hasaballah_CV.pdf`} className={styles.secondaryButton} download="Hazem_Hasaballah_CV.pdf">
                            <svg className={styles.btnIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span>My Resume</span>
                        </a>
                    </div>
                </div>

                <div className={styles.heroImage}>
                    <div className={styles.imageWrapper}>
                        <img src={heroImg} alt="Hazem Ziead - Front-End Developer" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;