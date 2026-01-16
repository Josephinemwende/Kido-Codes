import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

import art2 from "../assets/art2.png";
import elephantArt from "../assets/watercolor-elephant-illustration.png";

import blobShapeMath from "../assets/Asset 4.svg";
import blobShapeArt from "../assets/Asset 6.svg";
import blobShapeCoding from "../assets/Asset 10.svg";

import "../App.css";

export type SubjectTheme ={
    bg: string;
    softBg: string; // option softer background if needed
    color: string;
};

export type Subject = {
    title: string;
    description: string;
    image1: string;
    image2: string;
    blob: string;
    objectives: string[];
    theme: SubjectTheme;
};
const subjects: Subject[] = [
    {
      title: "Art",
      description:
        "Unlock imagination and self-expression through hands-on artistic exploration. This subject nurtures creativity while building a strong foundation in visual thinking and design.",
      image1: art2,
      image2: elephantArt,
      blob: blobShapeArt,
      objectives: [
        "Encourage creative thinking and personal artistic voice",
        "Learn essential concepts such as color theory, balance, and composition",
        "Experiment with diverse art styles, tools, and mediums",
        "Build confidence in self-expression through art",
      ],
      theme:{
        bg: "bg-orange-600",
        softBg: "bg-orange-600/10",
        color: "text-orange-600",
      },
    },
    {
      title: "Mathematics",
      description:
        "Build strong logical reasoning and problem-solving skills through engaging mathematical concepts.",
      image1: art2,
      image2: elephantArt,
      blob: blobShapeMath,
      objectives: [
        "Develop logical and analytical thinking",
        "Understand core mathematical principles",
        "Apply math to real-world scenarios",
        "Build confidence in problem-solving",
      ],
      theme: {
      bg: "bg-green-600",
      softBg: "bg-green-600/10",
      color: "text-green-600",
    },
    },
    {
      title: "Coding",
      description:
        "Introduce computational thinking and creativity through beginner-friendly coding concepts.",
      image1: art2,
      image2: elephantArt,
      blob: blobShapeCoding,
      objectives: [
        "Understand basic programming logic",
        "Develop problem-solving skills",
        "Learn to think algorithmically",
        "Build confidence using technology creatively",
      ],
      theme: {
      bg: "bg-blue-600",
      softBg: "bg-blue-600/10",
      color: "text-blue-600",
    },
    },
  ];

const Subjects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % subjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + subjects.length) % subjects.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % subjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="courses"
      className="py-12 px-4 sm:px-6 lg:px-10 bg-green-600/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-3">
          <h4 className="inline-block bg-green-600/10 text-green-700 px-4 py-1 rounded-full text-sm font-semibold uppercase mb-2">
            Courses
          </h4>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
            Subjects Covered
          </h1>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {subjects.map((subject, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="relative w-full max-w-md mx-auto h-96">
                    <img
                      src={subject.blob}
                      alt=""
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={subject.image1}
                        alt={subject.title}
                        className="w-80 h-80 object-contain"
                      />
                      <img
                        src={subject.image2}
                        alt={`${subject.title} illustration`}
                        className="absolute -bottom-5 -right-24 w-48 object-contain"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl p-8 bg-white">
                    <h4 className={`text-2xl font-bold ${subject.theme.softBg} ${subject.theme.color} mb-4 p-2 rounded-xl text-center`}>
                      {subject.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {subject.description}
                    </p>

                    <ul>
                      {subject.objectives.map((objective, idx) => (
                        <li key={idx} className={`flex items-start gap-4 rounded-xl p-2`}>
                          {/* Dynamic Check Icon */}
                          <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${subject.theme.softBg}`}>
                            <Check className={`h-4 w-4 stroke-[3] ${subject.theme.color}`}/>
                          </span>
                          <span className="text-gray-700 leading-relaxed">
                            {objective}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-10 z-50 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {subjects.map((_, index) => {
            const isActive = currentSlide === index;
            const activeColor = subjects[index].theme.bg; // dynamic color per subject

            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  isActive
                    ? `w-8 ${activeColor}`
                    : "w-2 bg-gray-300"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
