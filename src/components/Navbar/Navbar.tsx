import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 20);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu when clicking link
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.navbar}>
                <a className={styles.logo} href="#home" onClick={closeMenu}>
                    Hazem Ziead<span>.</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpenBtn : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                {/* Nav Links */}
                <div className={`${styles.navLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;