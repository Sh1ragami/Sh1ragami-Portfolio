import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-section py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Eng<span className="text-secondary-400">Portfolio</span></h3>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="flex space-x-4">
              <a
                href="https://github.com/Sh1ragami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors group relative"
              >
                <Github size={20} />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a
                href="https://qiita.com/Sh1ragami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors group relative"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.5c5.2 0 9.5 4.3 9.5 9.5s-4.3 9.5-9.5 9.5S2.5 17.2 2.5 12 6.8 2.5 12 2.5z" />
                  <path d="M12 5c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 2.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5S7.5 14 7.5 11.5 9.5 7.5 12 7.5z" />
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Qiita
                </span>
              </a>
              <a
                href="mailto:2301016@s.asojuku.ac.jp"
                className="text-gray-400 hover:text-white transition-colors group relative"
              >
                <Mail size={20} />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;