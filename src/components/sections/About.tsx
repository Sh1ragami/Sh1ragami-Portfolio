import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-200 rounded-lg z-0"></div>
              <img
                src="/images/shiragami.jpg"
                alt="Professional headshot"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">白神　晴陽</h2>
            <p className="section-subtitle">
              山口県出身の専門学生。
              元々はエンジニアとは無縁の人生を送っていましたが、偶然触れたプログラミングの楽しさや可能性に惹かれ、エンジニアを目指すことを決意しました。
              現在は福岡市博多区にある麻生情報ビジネス専門学校に通いながら、プログラミングの勉強をしています。
              授業だけでなく、独学でもCSを学び、ハッカソンなどの様々なコンテストに参加するなかで新たな言語にも挑戦し独自に学ぶことを心がけています。
              作品や活動についてはページ下部で紹介していますので、ぜひご覧ください。
            </p>

            {/* Key focus areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Code size={32} className="text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">バック</h3>
                <p className="text-gray-600">javaやPHP、C++など幅広く使用しています。最近は、pythonやRustを勉強しています。</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Server size={32} className="text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">フロント</h3>
                <p className="text-gray-600">主に、React, Next.js, tailwind.cssなどを使って開発しています。</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Cloud size={32} className="text-accent-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">その他</h3>
                <p className="text-gray-600">暗号理論やベクトル検索など幅広く勉強しています。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;