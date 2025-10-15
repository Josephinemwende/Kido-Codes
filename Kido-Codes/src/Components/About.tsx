import kidLearningOnline from '../assets/kid-learning-online.jpg';
import MathImage from '../assets/Maths.jpg';
import artImage from '../assets/art.jpg';
import codeImage from '../assets/code.jpg';
const About = () => {
    return(
        <section id="about" className="relative py-15 bg-gray-100 overflow-hidden">
            <img src={MathImage} alt="Math" className="absolute bottom-0 right-10 w-20 h-20 rounded-full animate-bounce" style={{ animationDuration: "20s" }}/>
            <img src={artImage} alt="Art" className="absolute top-48 right-80 w-20 h-20 rounded-full animate-bounce" style={{ animationDuration: "20s" }}/>
            <img src={codeImage} alt="Code" className="absolute top-10 right-40 w-20 h-20 rounded-full animate-bounce" style={{ animationDuration: "20s" }}/>
            
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Image Section */}
                <div className="flex justify-center lg:justify-start h-full">
                    <img src={kidLearningOnline} alt="Kid learning online" className="rounded-2xl shadow-lg w-full object-cover max-w-md transform hover:scale-105 transition-transform duration-300"/>
                </div>

                {/* Text Section */}
                <div className="text-center lg:text-left space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

                    <blockquote className="text-xl italic text-gray-600 border-l-4 border-green-500 pl-4">
                        “The future belongs to creators. Through Kido-Codes, we’re empowering kids to think
                        critically, express creatively, and code confidently — one lesson at a time.”
                    </blockquote>

                    <span className="block font-semibold text-green-700 text-right">— Maureen Mwenswa, Founder</span>

                    <p className="text-gray-700 leading-relaxed">
                        At <span className="font-semibold text-green-600">Kido-Codes</span>, we believe learning should be fun,
                        creative, and empowering. Our mission is to help kids explore the worlds of Math, Art, and
                        Coding through engaging lessons and interactive video content.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        We combine expert tutoring with hands-on learning — giving every child the chance to think
                        logically, create boldly, and express themselves confidently. From colorful art tutorials
                        to exciting coding projects and math challenges, Kido-Codes makes education feel like an
                        adventure.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Whether your child is just starting out or ready to level up, our platform offers
                        personalized learning paths, certified tutors, and a library of fun YouTube videos designed
                        to inspire curiosity and confidence.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Because at <span className="font-semibold text-green-600">Kido-Codes</span>, we’re not just teaching
                        skills — we’re nurturing the next generation of thinkers, creators, and innovators.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About;