"use client";
import { useEffect } from "react";
import './Services.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 100
        });
    }, []);
    return (
        <section id="services" className="services">

            <p className="section-tag" data-aos="fade-in" data-aos-delay="100">WHAT WE DO</p>

            <h2  data-aos="fade-up">Our Services</h2>

            <p className="services-description tag" data-aos="fade-down" >
                We provide creative solutions to help your business grow.
            </p>

            <div className="service-container">
                <div data-aos="flip-down" >

                    <div className="service-card">
                        <h3>🎨</h3>
                        <h3>UI/UX Design</h3>
                        <p>
                            We create beautiful and user-friendly designs
                            for websites and applications.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-down" data-aos-delay="200">

                    <div className="service-card">
                        <h3>💻</h3>
                        <h3>Web Development</h3>
                        <p>
                            We build responsive and modern websites
                            using the latest technologies.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-down" data-aos-delay="400">
                    <div className="service-card" >
                        <h3>✨</h3>
                        <h3>Branding</h3>
                        <p>
                            We help businesses build strong identities
                            with creative branding solutions.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-down" data-aos-delay="600">
                    <div className="service-card" >
                        <h3>📈</h3>
                        <h3>Digital Marketing</h3>
                        <p>
                            We help brands reach more customers
                            through digital marketing strategies.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}
