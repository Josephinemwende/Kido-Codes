import '../App.css'
import { Palette, Code, Plus, Divide } from 'lucide-react';
import Navbar from './Navbar';  
import kid from '../assets/kids.png';
import Avatar from '../assets/avatar5.jpg';
import image from '../assets/kido-codes.png';
const HeroSection= () => {
  return (
    <section id="Hero-Section" className="py-5 px-6 sm:px-10 md:px-20 relative overflow-hidden">
      <Navbar />
        {/* Main content */}
        <div className="inline-block bg-green-600/10 text-green-700 px-4 py-1 rounded-full text-sm font-semibold animate-fade-in mb-2">
          kiddo codes -  Kids Tutoring Platform and Content
        </div>
        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-gray-800 leading-snug sm:leading-tight md:leading-tight tracking-tight text-center md:text-left">
            Learn. Create. <span className="text-green-600">Code.</span><br/>
            <span className="text-lg text-green-800 font-semi-bold block tracking-tight sm:tracking-wide md:tracking-normal">Master Art, Maths or Coding | Ages 6 - 13</span>
          </h1>
          <img src={image} alt="kids learning illustration" className="absolute -top-5 right-90 w-40 h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 animate-float"/>
        </div>
        {/*main content grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div className="flex justify-center md:justify-start relative">
            <img src={kid} alt="an image of a kid with books" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-auto rounded-lg" />
            <div className="absolute -top-40 -right-80 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-90 animate-bounce" style={{ animationDuration: "3s" }}>
              <Palette className="w-8 h-8 text-green-600" />
            </div>
            <div className="absolute -top-15 -right-40 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-90 animate-bounce" style={{ animationDuration: "3s" }}>
              <Code className="w-8 h-8 text-green-600" />
            </div>
            <div className="absolute top-5 -right-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-90 animate-bounce" style={{ animationDuration: "3s" }}>
              <Plus className="w-8 h-8 text-green-600" />
            </div>
            <div className="absolute -top-10 -right-96 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-90 animate-bounce" style={{ animationDuration: "3s" }}>
              <Divide className="w-8 h-8 text-green-600" />
            </div>
          </div>
          {/* Right Side */}
          <div className="text-center md:text-left space-y-3 lg:mt-3">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-gray-800 leading-snug">— Where Young Minds Grow Bright!</h1>
            <p className="text-sm text-gray-700 sm:text-lg leading-relaxed mb-4">
              Our platform offers fun, interactive lessons in math, art, and coding, designed to spark curiosity and build confidence. 
              Kids explore new skills, unleash their creativity, and learn at their own pace with expert tutors who make every session exciting and rewarding.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-start justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-br from-green-600 to-green-400 text-white font-semibold text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition"
              >
                Book a free trial session
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src={Avatar} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white"/>
                  <img src={Avatar} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white"/>
                  <img src={Avatar} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white"/>
                  <img src={Avatar} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white"/>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-green-600 to-green-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                    +
                  </div>
                </div>
              </div>
              <span className="text-gray-700 font-medium">Future Creators</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
          </div>
          </div>
        </main>

        {/* Decorative shapes */}
        <div className="absolute top-28 right-52 w-5 h-5 rounded-full bg-green-600 opacity-60 animate-bounce"  style={{ animationDuration: "2s" }}></div>
        <div className="absolute top-28 right-30 w-10 h-10 rounded-full bg-green-600 opacity-60 animate-bounce"  style={{ animationDuration: "2s" }}></div>
        <div className="absolute top-80 right-28 w-4 h-4 rounded-full bg-green-400 opacity-60 animate-bounce"  style={{ animationDuration: "2s" }}></div>
        <div className="absolute top-15 right-15 w-3 h-3 rounded-full bg-green-600 opacity-60 animate-bounce"  style={{ animationDuration: "2s" }}></div>
      </section>
  );
};

export default HeroSection;
