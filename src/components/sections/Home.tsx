import React from 'react';
import { Github, Linkedin, MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const sentence = "Passionate about using technology to solve real-world problems."
const typingAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, 
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Home: React.FC = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="text-center px-6">
        <img
          src="/image.png"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
        />
        <h1 className="text-5xl font-mono text-blue-800 mb-4">Prarthana Kandwal</h1>
        <p className="text-xl font-mono mb-8">Software Engineer</p>
        <motion.p
          className="font-mono max-w-2xl mx-auto mb-12"
          variants={typingAnimation}
          initial="hidden"
          animate="visible"
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/prarthana1998" className="hover:text-gray-900">
            <Github  />
          </a>
          <a href="https://www.linkedin.com/in/prarthana-kandwal/" className= "hover:text-gray-900">
            <Linkedin />
          </a>
          <a href="mailto:prarthanakandwal98@gmail.com" className= "hover:text-gray-900">
            <MailIcon/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;