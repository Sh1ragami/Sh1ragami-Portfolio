import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-700/70 z-10"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      ></div>

      {/* Content */}
      <div className="container-section relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Haruhi Shiragami
          </h1>

          <div className="text-xl md:text-3xl mb-8 font-light">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Engineer',
                  'Backend Developer',
                  'Cloud Architect'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button
              className="btn btn-primary mr-4"
              onClick={() => {
                const worksSection = document.getElementById('works');
                worksSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              プロジェクトをみる
            </button>
            <button
              className="btn btn-outline text-white border-white hover:bg-white/10"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              お問い合わせ
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;