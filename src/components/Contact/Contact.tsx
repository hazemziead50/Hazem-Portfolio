import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });
        
        try {
        
            const templateParams = {
                name: formData.name,
                from_name: formData.name,
                user_name: formData.name,
                email: formData.email,
                from_email: formData.email,
                user_email: formData.email,
                reply_to: formData.email,
                message: formData.message,
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
                
            // رسالة نجاح
            setSubmitStatus({
                type: 'success',
                message: '✅ Your message has been sent successfully! I\'ll get back to you soon.',
            });

            // تفريغ الحقول
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('❌ Failed to send email:', error);
            // رسالة خطأ
            setSubmitStatus({
                type: 'error',
                message: '❌ Something went wrong. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={ref}
            id="contact"
            className={`${styles.contactSection} ${inView ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                {/* العنوان */}
                <div className={styles.header}>
                    <p className={styles.tag}>Contact</p>
                    <h2>Get In Touch</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.subtitle}>
                        Have a project in mind? Let's work together!
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    {/* الجانب الأيسر: معلومات الاتصال */}
                    <div className={styles.contactInfo}>
                        <h3>Let's Connect</h3>
                        <p className={styles.infoText}>
                            I'm always open to new opportunities, collaborations, or just a
                            friendly chat. Feel free to reach out!
                        </p>

                        <div className={styles.infoItems}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:hazemziead50@gmail.com">hazemziead50@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Palestine</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+970123456789">+970 123 456 789</a>
                                </div>
                            </div>
                        </div>

                        {/* روابط التواصل الاجتماعي */}
                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com/hazemziead50"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub"
                            >
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hazem-ziead-89a3a4403/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                            >
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                            </a>

                            <a
                                href="mailto:hazemziead50@gmail.com"
                                className={styles.socialLink}
                                aria-label="Email"
                            >
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* الجانب الأيمن: نموذج الاتصال */}
                    <div className={styles.contactForm}>
                        <h3>Send Me a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange} 
                                    required
                                ></textarea>
                            </div>

                            {submitStatus.message && (
                                <div
                                    className={`${styles.statusMessage} ${
                                        submitStatus.type === 'success' ? styles.statusSuccess : styles.statusError
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.spinner} aria-hidden="true" />
                                        <span>Sending Message...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg className={styles.submitIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;