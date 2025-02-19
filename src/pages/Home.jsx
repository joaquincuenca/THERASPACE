import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        image: "./images/academic-tutorial.png",
        title: "Behavioral Therapy",
        subtitle: "LEARNING AND DEVELOPMENT CENTER",
        tagline: "ALL ARE INCLUDED. ALL CAN LEARN.",
    },
    {
        image: "./images/behavior-img.png",
        title: "Speech Enhancement",
        subtitle: "ENHANCING SKILLS FOR A BETTER FUTURE",
        tagline: "EVERY CHILD DESERVES A CHANCE TO LEARN.",
    },
    {
        image: "./images/speech-enhancement.png",
        title: "Academic Tutorial",
        subtitle: "BUILDING STRONGER MINDS",
        tagline: "A JOURNEY OF KNOWLEDGE AND DEVELOPMENT.",
    },
    ];

    const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-screen">
        {/* 🔄 Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        ></div>

        {/* 🔳 Dark Overlay & Text Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="w-full max-w-[90%] sm:max-w-2xl pl-6 md:pl-12 lg:pl-24 text-white pb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
                {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-2xl mt-4">{slides[currentSlide].subtitle}</p>
            <p className="text-base sm:text-lg italic mt-2">{slides[currentSlide].tagline}</p>
            <button className="mt-6 px-6 py-3 sm:px-10 sm:py-5 text-lg sm:text-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold rounded-lg shadow-lg">
                Book Appointment
            </button>
            </div>
        </div>

        {/* ◀️ Left Button */}
        <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-opacity-70 transition-all duration-300"
        >
            <FaChevronLeft size={24} sm:size={28} />
        </button>

        {/* ▶️ Right Button */}
        <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-opacity-70 transition-all duration-300"
        >
            <FaChevronRight size={24} sm:size={28} />
        </button>
        </div>
    );
};

export default Home;
