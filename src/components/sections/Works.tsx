import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  images: string[];
  features: string[];
  role: string;
  period: string;
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Passit',
    image: '/images/passit.jpg',
    description: 'パスワード管理アプリケーション。安全なパスワード生成と管理を提供します。',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6737',
    images: [
      '/images/passit.jpg',
      '/images/passit-2.jpg',
      '/images/passit-3.jpg',
    ],
    features: [
      '安全なパスワード生成',
      'カテゴリ別管理',
      '自動バックアップ',
      'マルチデバイス同期'
    ],
    role: 'フロントエンド開発',
    period: '2023年10月 - 2023年12月'
  },
  {
    id: 2,
    title: 'Healpass',
    image: '/images/healpass.jpg',
    description: '医療機関向け予約管理システム。患者と医療機関を効率的にマッチングします。',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6090',
    images: [
      '/images/healpass.jpg',
      '/images/healpass-2.jpg',
      '/images/healpass-3.jpg',
    ],
    features: [
      'オンライン予約',
      '診療科別管理',
      '患者カルテ管理',
      '予約リマインダー'
    ],
    role: 'バックエンド開発',
    period: '2023年7月 - 2023年9月'
  },
  {
    id: 3,
    title: 'Mon Deb Co',
    image: '/images/mondebco.jpg',
    description: 'モダンなデビットカード管理アプリ。支出の追跡と予算管理を簡単に。',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6731',
    images: [
      '/images/mondebco.jpg',
      '/images/mondebco-2.jpg',
      '/images/mondebco-3.jpg',
    ],
    features: [
      '支出の自動分類',
      '予算設定と管理',
      'レポート生成',
      'マルチカード対応'
    ],
    role: 'フルスタック開発',
    period: '2023年4月 - 2023年6月'
  },
  {
    id: 4,
    title: 'Scanry',
    image: '/images/scanry.jpg',
    description: 'QRコードスキャンアプリ。商品情報の即時取得と価格比較が可能。',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6742',
    images: [
      '/images/scanry.jpg',
      '/images/scanry-2.jpg',
      '/images/scanry-3.jpg',
    ],
    features: [
      'QRコードスキャン',
      '価格比較機能',
      '商品レビュー表示',
      'お気に入り登録'
    ],
    role: 'フロントエンド開発',
    period: '2023年1月 - 2023年3月'
  },
  {
    id: 5,
    title: 'シェア・タイム',
    image: '/images/sharetime.jpg',
    description: '時間共有アプリ。友達や家族と予定を簡単に共有・調整できます。',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'AWS'],
    link: 'https://protopedia.net/prototype/6741',
    images: [
      '/images/sharetime.jpg',
      '/images/sharetime-2.jpg',
      '/images/sharetime-3.jpg',
    ],
    features: [
      '予定の共有',
      'カレンダー同期',
      'リマインダー機能',
      'グループ管理'
    ],
    role: 'バックエンド開発',
    period: '2022年10月 - 2022年12月'
  }
];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
            詳細を見る
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* 左側：プロジェクト情報 */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">概要</h4>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">主な機能</h4>
                <ul className="space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">使用技術</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">担当</h4>
                  <p className="text-gray-600">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">開発期間</h4>
                  <p className="text-gray-600">{project.period}</p>
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                <span>プロジェクトを見る</span>
              </a>
            </div>
          </div>

          {/* 右側：画像スライダー */}
          <div className="w-full md:w-1/2 bg-gray-50">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-full"
            >
              {project.images.map((image: string, index: number) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full">
                    <img
                      src={image}
                      alt={`${project.title} - 画像 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;