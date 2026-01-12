import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight} from 'lucide-react';
import art from "../assets/Art.jpg";
import art2 from "../assets/art2.png";
import coding from "../assets/Coding.jpg";
import maths from "../assets/maths.png";
import elephantArt from "../assets/watercolor-elephant-illustration.png";
import blobShape from '../assets/Asset 4.svg';
import "../App.css";
const Subjects = () => {
    const [ currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const subjects = [
        {
            title: "Art",
            image1:{art2},
            image2:{elephantArt},
            blob:{blobShape},
            objectives:[
                "Develop creativity and artistic expression",
                "Understand color theory and composition",
                "Explore various art techniques and mediums",
                "Build confidence in self-expression through art"
            ]
        },
        {
            title: "Art",
            image1:{art2},
            image2:{elephantArt},
            blob:{blobShape},
            objectives:[
                "Develop creativity and artistic expression",
                "Understand color theory and composition",
                "Explore various art techniques and mediums",
                "Build confidence in self-expression through art"
            ]
        },
        {
            title: "Art",
            image1:{art2},
            image2:{elephantArt},
            blob:{blobShape},
            objectives:[
                "Develop creativity and artistic expression",
                "Understand color theory and composition",
                "Explore various art techniques and mediums",
                "Build confidence in self-expression through art"
            ]
        }

    ];
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % subjects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + subjects.length) % subjects.length);
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000); // Change slide every 5 seconds

            return () => clearInterval(interval);
        }
    }, [currentSlide, isPaused]);
    return(
        <section id="courses" className="py-20 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-16">
                    <h4 className="inline-block bg-green-600/10 text-green-700 px-4 py-1 rounded-full text-sm font-semibold animate-fade-in mb-2 uppercase">Subjects covered</h4>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">What Your Child Will Master</h1>
                    <p className="max-w-2xl mt-4 text-gray-600 leading-relaxed">Building foundational skills through engaging, hands-on learning experiences</p>
                </div>
                
                <div className="relative">
                    <div className="overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {subjects.map((subject, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                                        <div className="relative w-full max-w-md mx-auto h-96 group">
                                            <img src={blobShape} className="w-full h-full"/>
                                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                                <img src={art2} alt={subject.title}
                                                    className="w-80 h-80 object-contain" />
                                                <img src={elephantArt} alt={`${subject.title} illustration`}className="w-120 h-120 object-contain absolute -bottom-5 -right-30" />
                                            </div>
                                        </div>
                                        <div className="rounded-2xl p-8">
                                            <div className="flex items-center gap-3 mb-6">
                                                <h4 className="text-2xl font-bold text-gray-800">{subject.title}</h4>
                                            </div>
                                            <ul className="space-y-4">
                                                {subject.objectives.map((objective, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
                                                        <span className="text-gray-700">{objective}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10" aria-label="Previous slide">
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10" aria-label="Next slide">
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
                <div className="flex justify-center gap-2 mt-8">
                    {subjects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentSlide === index 
                                    ? 'w-8 bg-green-600' 
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Subjects;