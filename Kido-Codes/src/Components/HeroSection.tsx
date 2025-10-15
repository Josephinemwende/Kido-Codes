import { BookOpen, Gamepad2 } from 'lucide-react';
import Navbar from "./Navbar";
import About from './About';
import kid from '../assets/kids.png';
import Avatar from '../assets/avatar5.jpg';
import image from '../assets/kido-codes.png';
const HeroSection= () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] px-5 ">
        <Navbar/>
        <section className="py-5 relative">
          {/* Main content */}
          <div className="inline-block bg-green-600/10 text-green-700 px-6 rounded-full text-sm font-semibold animate-fade-in">
            kido codes - Coding for Kids
          </div>
          <div className="relative flex flex-col md:flex-row items-center gap-12">
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-800 leading-tight tracking-tight">
              Learn. Create. <span className="text-green-600">Code.</span>
            </h1>
            <img src={image} className="absolute -top-5 right-90 w-50 h-50 md:w-48 md:h-48 animate-float"/>
          </div>
          {/*main content grid */}
          <main className="grid md:grid-cols-2 gap-16 items-center relative">
            {/* Left side */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                <img src={kid} alt="an image of a kid with books" style={{height:"600px", width:"600px"}} />
              </div>
            </div>
            {/* Right Side */}
            <div className="z-10 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6 -tracking-tight">— Where Young Minds Grow Bright!</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Our platform offers fun, interactive lessons in math, art, and coding, designed to spark curiosity and build confidence. 
                Kids explore new skills, unleash their creativity, and learn at their own pace with expert tutors who make every session exciting and rewarding.
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:justify-start justify-center items-center">
                <a
                  href="#"
                  className="bg-gradient-to-br from-green-600 to-green-400 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition"
                >
                  Get Started Today
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src={Avatar} className="w-12 h-12 rounded-full border-2 border-white"/>
                    <img src={Avatar} className="w-12 h-12 rounded-full border-2 border-white"/>
                    <img src={Avatar} className="w-12 h-12 rounded-full border-2 border-white"/>
                    <img src={Avatar} className="w-12 h-12 rounded-full border-2 border-white"/>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
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
        {/*<section>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                We offer customized learnin tailored to each child's unique needs abilities and interests personalized
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Games</h3>
              <p className="text-gray-600">
                Our platform features that educational games and activitis designed to make learning enjoyable these
              </p>
            </div>
          </div>
        </section>*/}
      </div>
      <About/>
    </div>
  );
};

export default HeroSection;
