"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Hero.css';

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
            easing: "ease-in-out"
        });
    }, []);
    return (
        <section id="hero" className="hero">

            <p className="hero-tag" data-aos="fade-in" data-aos-delay="600" >CREATIVE DIGITAL AGENCY</p>

            <h1 data-aos="fade-down">
                We Create <span data-aos="flip-down" data-aos-delay="400">Digital</span> <br />
                Experiences That <br />
                Inspire.
            </h1>

            <p className="hero-description" data-aos="fade-in" data-aos-delay="600" >
                We help brands grow with creative design,
                modern websites and powerful digital solutions.
            </p>

            <div className="hero-buttons" data-aos="fade-in" data-aos-delay="600" >
                <button>Get Started</button>
                <a href="#portfolio">View Our Work →</a>
            </div>

        </section>
    )
}