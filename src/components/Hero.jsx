import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/manishprofile.jpg";
import { motion } from "framer-motion";
import cvFile from "../assets/Manish CV1.pdf"; // Assuming you have the CV file in your assets folder

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <div className="lg:w-1/2 p-6">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-15 lg:text-7xl"
          >
            Manish Sharma
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            CYBER SECURITY ETHICAL HACKER
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            href={cvFile}
            download="Manish CV1.pdf"
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          >
            Download CV
          </motion.a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:p-6 flex justify-center">
        <motion.img 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="rounded-2xl w-72 h-72 object-cover" 
          src={profilePic} 
          alt="Manish Sharma" 
        />
      </div>
    </div>
  );
};

export default Hero;
