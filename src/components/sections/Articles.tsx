import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Articles data
const articles = [
  {
    id: 1,
    title: 'GPGPUの数学的理論：なぜ行列演算がGPUと相性がいいのか？',
    image: '/images/articles/article_1.png',
    date: '2025-05-24',
    excerpt: 'GPUが得意とする並列処理の本質に迫り、なぜ行列演算がGPGPUと抜群に相性が良いのかを数学的視点から解説します。',
    readTime: '8 min read',
    link: 'https://qiita.com/Sh1ragami/items/08a8e36c9fc26695d6d6',
  },
  {
    id: 2,
    title: '量子時代の暗号技術：ポスト量子暗号(PQC)とは？',
    image: '/images/articles/article_2.png',
    date: '2023-08-22',
    excerpt: '量子コンピュータによって従来の暗号が破られる未来に備え、ポスト量子暗号（PQC）の基本とその重要性をわかりやすく解説します。',
    readTime: '12 min read',
    link: 'https://qiita.com/Sh1ragami/items/8e48a7aa44d840284f3e',
  },
  {
    id: 3,
    title: '【完全解説】Pythonのリアルタイム処理｜弱点・対策・実装コードまとめ',
    image: '/images/articles/article_3.png',
    date: '2023-06-10',
    excerpt: 'pythonのリアルタイム処理の限界やその対策について解説します。',
    readTime: '10 min read',
    link: 'https://qiita.com/Sh1ragami/items/c390d2bf4608274a4a19',
  },
];

const Articles = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="articles" className="bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">技術記事</h2>
          <p className="section-subtitle mx-auto">
            アウトプットのために、定期的に技術記事を書いています。ご興味がありましたら、ぜひご覧ください.
          </p>
        </motion.div>

        {/* Articles Carousel */}
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
                slidesPerView: 3,
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
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-md h-full border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>

                    <a
                      href={article.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      記事をみる
                      <ExternalLink size={16} className="ml-1" />
                    </a>
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

export default Articles;