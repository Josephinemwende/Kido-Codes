import Owl from '../assets/Owl.png';
import { BookOpen, Gamepad2, Users } from 'lucide-react';
const About = () => {
    return(
        <section className="about py-12 px-4 sm:px-6 lg:px-20">   
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-10 items-center">
                {/* Image Section */}
                <div className="flex justify-center lg:justify-start lg:mt-8">
                    <img src={Owl} alt="Owl Mascot" className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] transform hover:scale-105 transition-transform duration-300"/>
                </div>

                {/* Text Section */}
                <div>
                    <h4 className="inline-block bg-green-600/10 text-green-700 px-4 py-1 rounded-full text-sm font-semibold animate-fade-in mb-2 uppercase">
                        About Us
                    </h4>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
                        Why Choose Kiddo Codes?
                    </h2>
                    <p className="mt-4 text-green-600 font-bold leading-relaxed">
                        Learning should feel like an adventure, not a chore.</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        We're not your typical tutoring service. Our certified instructors don't follow rigid curriculums. Instead, they discover what makes each child's eyes light up, then build personalized learning paths around those passions. 
                        Whether your child dreams in pixels, thinks in algorithms, or expresses themselves through art, we meet them exactly where they are.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        <div className="bg-green-600/10 rounded-2xl p-6 shadow-md shadow-green-600/10 hover:shadow-xl transition transform hover:scale-105 transition-transform duration-300">
                            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Learning</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                We offer customized learning tailored to each child's unique needs abilities and interests personalized.
                            </p>
                        </div>
                        <div className="bg-green-600/10 rounded-2xl p-6 shadow-md shadow-green-600/10 hover:shadow-xl transition transform hover:scale-105 transition-transform duration-300">
                            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Games</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Our platform features educational games and activities designed to make learning enjoyable and engaging.
                            </p>
                        </div>
                        <div className="bg-green-600/10 rounded-2xl p-6 shadow-md shadow-green-600/10 hover:shadow-xl transition transform hover:scale-105 transition-transform duration-300">
                            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Tutors </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Our certified instructors have both technical expertise and experience working with children. They know how to make complex concepts simple and fun.
                            </p>
                        </div>
                    </div>
                    <blockquote className="mt-10 text-lg italic text-gray-600 border-l-4 border-green-500 pl-4">
                        “The future belongs to creators. Through Kiddo-Codes, we’re empowering kids to think
                        critically, express creatively, and code confidently — one lesson at a time.”
                    </blockquote>
                    <span className="block mt-2 font-semibold text-green-700 text-right">— Maureen Mwenswa, Founder</span>
                </div>
            </div>
        </section>
    )
}
export default About;