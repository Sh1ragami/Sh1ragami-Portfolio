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
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  link: string;
  images: string[];
  role: string;
  period: string;
  canvaUrl?: string;
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Passit',
    image: '/images/passit/passit.jpg',
    shortDescription: '予約キャンセルの再利用を可能にするブロックチェーンアプリケーション。',
    fullDescription: 'このプロダクトは、2024年10月開催のブロックチェーンを用いたビジネスモデル大会において、 予約キャンセルの再利用をテーマにした「Passit」を発案し、特別賞を受賞しました。ブロックチェーンの利点である優れたデータの透明性とNFTがもつ様々な特性を掛け合わせ、 予約の譲渡を可能にすることで予約キャンセルによる不利益を軽減しより多くの人に利益をもたらすことを目指しました。',
    technologies: ['Ethereum', 'ERC-721', 'Solidity', 'Ruby on Rails', 'Flutter', 'Firebase', 'Firestore'],
    link: 'https://protopedia.net/prototype/6737',
    images: [
      '/images/passit/passit.jpg',
    ],
    role: 'アイデア立案、検討',
    period: '2023年8月 - 2023年12月',
    canvaUrl: 'https://www.canva.com/design/DAGao0lOeHM/mkDsoL1MAR1YAtsX9rw8rA/view?embed'
  },
  {
    id: 2,
    title: 'Healpass',
    image: '/images/healpass/healpass.jpg',
    shortDescription: '体型表示、AI機能を備えた次世代の健康管理アプリ',
    fullDescription: 'このアプリは、2024年11月開催の Engineer Driven Day (EDD) 2024 にて「ライブリンクス賞」、 2024年12月の 技育博2024 Vol.5 にて「サイバーエージェント賞」を受賞した健康管理アプリです。現代社会で大きな課題となっている「健康管理」や「孤食」に対し、 食事記録や日々の健康管理の手間を軽減し、視覚的にデータを把握できるように設計されています。さらに「Healpass」では、一般的な健康管理機能に加えて、 AIとの会話機能や体型の可視化機能も搭載しており、楽しみながら継続的に健康管理ができるのが特徴です。',
    technologies: ['Flutter', 'Firebase', '楽天レシピ検索API', 'FCM', 'Google Fit API', 'TripoSR'],
    link: 'https://protopedia.net/prototype/6090',
    images: [
      '/images/healpass/healpass.jpg',
    ],
    role: 'フルスタック開発',
    period: '2024年7月 - 2024年9月',
    canvaUrl: 'https://www.canva.com/design/DAGUBc_agXU/Q0aLKqZovm7Fz8j4WEivhA/view?embed'
  },
  {
    id: 3,
    title: 'Mon Deb Co',
    image: '/images/mondebco/mondebco.jpg',
    shortDescription: 'パッシブスキャンを駆使したASM（Attack Surface Management）ツール',
    fullDescription: 'このツールは、2024年12月開催の株式会社MBSD（三井物産セキュアディレクション）が主催するセキュリティコンテストにおいて、 ASMをテーマにした課題に対して調査を行い手法を提案し実現することで最優秀賞を受賞しました。ASMに対してどのようなアプローチで調査を行い評価をするのかという論文を作成し、 実際に90個のツールを掛け合わせてパッシブスキャンを行い、企業の公開資産（特にシャドーIT）を調べるツールを開発しました。',
    technologies: ['Node.js', 'React', 'tailwind.css', 'python'],
    link: 'https://protopedia.net/prototype/6731',
    images: [
      '/images/mondebco/mondebco.jpg',
    ],
    role: 'フルスタック開発',
    period: '2024年10月 - 2024年12月',
    canvaUrl: 'https://www.canva.com/design/DAGYwyaSpuE/tkV4QMNzQ6loiDg02iPFRA/view?embed'
  },
  {
    id: 4,
    title: 'Scanry',
    image: '/images/scanry/scanry.jpg',
    shortDescription: 'スマホで手軽に収納サポートアプリ',
    fullDescription: 'このアプリは、2024年7月開催の Open Hack U 2024 FUKUOKA で開発した収納サポートアプリです。部屋の間取りと収納家具の位置をアプリ上に登録することで、 アイテムの保管場所を効率よく管理・可視化できるように設計されています。収納したいものをタグ付けし、家具と紐づけて登録することで 収納場所が容易に分かるように開発しました。',
    technologies: ['Flutter', 'Firebase Authentication', 'vision API', 'translation API'],
    link: 'https://protopedia.net/prototype/6742',
    images: [
      '/images/scanry/scanry.jpg',
    ],
    role: 'フロントエンド開発',
    period: '2024年7月 - 2024年7月',
    canvaUrl: 'https://www.canva.com/design/DAGLHs42zEE/P9DNvYZ15uSdT_DEUEeBkw/view?embed'
  },
  {
    id: 5,
    title: 'Share Time',
    image: '/images/sharetime/sharetime.jpg',
    shortDescription: 'ギガ共有から着想を経て作成した協力型スマホ依存解消アプリ',
    fullDescription: 'このアプリは、2024年12月開催の 九州アプリチャレンジ・キャラバン2024（チャレキャラ） にて 「チャレキャラ特別賞」を受賞した スマホ依存抑制アプリ です。現代で深刻化する「スマホ依存」問題に対して、 複数人でルームを作成し、スマホの使用時間を可視化・比較しながら競い合うことで依存を抑制するという仕組みで設計されています。また、リアルタイムでデータを同期し、ユーザーごとに固有のIDを割り当てることで、 各ユーザーの使用時間を正確に管理できるように開発されています',
    technologies: ['Firestore', 'Firebase Storage', 'Firebase DB'],
    link: 'https://protopedia.net/prototype/6741',
    images: [
      '/images/sharetime/sharetime.jpg',
    ],
    role: 'バックエンド開発',
    period: '2024年6月 - 2024年12月',
    canvaUrl: 'https://www.canva.com/design/DAGo0Uatm3o/hFB6jRnK1YJwLAXdoFs9AA/view?embed'
  },
  {
    id: 6,
    title: '麻生情報工学研究室 Webページ',
    image: '/images/aiel/aiel.jpg',
    shortDescription: '研究室のホームページ',
    fullDescription: '所属研究室用のホームページの作成を担当しました。必要な情報を伝えられるようにできるだけシンプルなデザインで作成しました。',
    technologies: ['React', 'Next.js', 'Vite', 'tailwind.css'],
    link: 'https://aiel.jp',
    images: [
      '/images/aiel/aiel.jpg',
    ],
    role: 'フルスタック開発',
    period: '2025年5月 - 2025年5月'
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
        <p className="text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>

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
  // モーダルが開かれたときに背景のスクロールを無効化
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-6xl my-8 overflow-hidden shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
          aria-label="閉じる"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* 左側：プロジェクト情報 */}
          <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{project.title}</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">概要</h4>
                <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
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

          {/* 右側：Canva埋め込みまたは画像スライダー */}
          <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">
            {project.canvaUrl ? (
              <div className="h-full w-full p-4 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-full">
                  <div className="w-full">
                    <div style={{
                      position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%',
                      paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', overflow: 'hidden',
                      borderRadius: '8px', willChange: 'transform'
                    }}>
                      <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                        src={project.canvaUrl} allowFullScreen={true} allow="fullscreen">
                      </iframe>
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      <a href={project.canvaUrl} target="_blank" rel="noopener" className="text-primary-600 hover:text-primary-700">別のタブで開く</a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-full w-full"
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
            )}
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