"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
    }, []);

    return (
        <section className="contact" id="contact">

            <p className="tag" data-aos="fade-down">GET IN TOUCH</p>

            <h2 data-aos="fade-up">Let's Work Together</h2>

            <p className="description" data-aos="fade-up">
                Have a project in mind? Let's discuss and create something amazing.
            </p>

            <div className="contact-container"  >

                <div className="contact-box" data-aos="fade-right">
                    <h3>Contact Information</h3>

                    <p>📧 Email: hello@designo.com</p>
                    <p>📞 Phone: +91 9876543210</p>
                    <p>📍 Location: Chennai, India</p>
                </div>

                <div className="contact-box" data-aos="fade-left">

                    <h3>Send Us a Message</h3>

                    <form>
                        <input type="text" placeholder="Your Name" />

                        <input type="email" placeholder="Your Email" />

                        <textarea placeholder="Your Message"></textarea>

                        <button type="button">Send Message</button>
                    </form>

                </div>

            </div>

        </section>
    );
}