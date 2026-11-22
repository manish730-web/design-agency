"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

export default function Portfolio() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
    }, []);
    return (
        <section className="portfolio" id="portfolio">

            <p className="tag" data-aos="fade-down">OUR WORK</p>

            <h2 data-aos="fade-up" >Our Creative Portfolio</h2>

            <p className="description" data-aos="fade-up" data-aos-delay="200">
                Explore some of our recent projects and creative works.
            </p>

            <div className="container">

                <div className="card" data-aos="fade-up">
                    <div className="image"><img src="https://static.vecteezy.com/system/resources/previews/000/457/141/original/landing-page-template-of-website-design-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg" alt="Website Design" /></div>
                    <h3 >Website Design</h3>
                </div>

                <div className="card" data-aos="fade-up" data-aos-delay="200">
                    <div className="image" ><img src="https://graphicdesignjunction.com/wp-content/uploads/2023/10/branding_visual_identity_designs-870x567.jpg" alt="Branding" /></div>
                    <h3>Brand Identity</h3>
                </div>

                <div className="card" data-aos="fade-up" data-aos-delay="400">
                    <div className="image"><img src="https://fuselabcreative.com/wp-content/uploads/2023/07/mobile-apps-design-trends.jpg" alt="Mobile App" /></div>
                    <h3>Mobile App</h3>
                </div>

            </div>

        </section>
    );
}