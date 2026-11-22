"use client";

import { useState, useEffect } from "react";
import './Navbar.css'

export default function Navbar() {
    const [theme, settheme] = useState("dark")
    useEffect(() => {
        const savedtheme = localStorage.getItem("theme");

        if (savedtheme) {
            settheme(savedtheme);
            document.documentElement.setAttribute("data-theme", savedtheme);
        }
    }, []);
    const handletheme = () => {

        if (theme === "dark") {

            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            settheme("light");
        }
        else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            settheme("dark");
        }

    };
    return (
        <nav>
            <h2>DESIGNO</h2>

            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button onClick={handletheme}> {theme === "dark" ? "☀️ Light" : "🌙 Dark"}</button>
        </nav>
    )
}