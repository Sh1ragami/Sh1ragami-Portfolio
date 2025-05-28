import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Project data
const projects = [
  {
    id: 1,
    title: 'Passit',
    image: '/images/passit.jpg',
    description: '',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6737',
  },
  {
    id: 2,
    title: 'Healpass',
    image: '/images/healpass.jpg',
    description: '',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6090',
  },
  {
    id: 3,
    title: 'Mon Deb Co',
    image: '/images/mondebco.jpg',
    description: '',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'ttps://protopedia.net/prototype/6731',
  },
  {
    id: 4,
    title: 'Scanry',
    image: '/images/scanry.jpg',
    description: '',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6742',
  },
  {
    id: 5,
    title: 'シェア・タイム',
    image: '/images/sharetime.jpg',
    description: '',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6741',
  },
  
];

const Works = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  
  return (
    <section id="works" className="bg-gray-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">プロジェクト一覧</h2>
          <p className="section-subtitle mx-auto">
            ハッカソンや個人で作成した作品です。
          </p>
        </motion.div>
        
        {/* Projects Carousel */}
        <div className="relative mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            onBeforeInit={(swiper) => {
              if (navigationPrevRef.current && navigationNextRef.current) {
                // @ts-ignore
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
            }}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div 
                  className="bg-white rounded-lg overflow-hidden shadow-md h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative h-70 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={project.link} 
                        className="text-gray-700 hover:text-primary-600 transition-colors flex items-center"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span>詳しく見る</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              ref={navigationPrevRef}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              ref={navigationNextRef}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;