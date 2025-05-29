import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code, ChevronDown } from 'lucide-react';

// Timeline data
const timelineItems = [
  {
    id: 1,
    year: '2020年 - 2023年',
    title: '山口県立萩商工高等学校',
    description: '簿記を中心に勉強し、全国商業高等学校協会の1級検定6種目取得',
    icon: <GraduationCap size={20} />,
    iconBg: 'bg-secondary-500',
    category: 'education',
    image: '/images/timeline/hagishoukou.jpg',
  },
  {
    id: 2,
    year: '2023年',
    title: '麻生情報ビジネス専門学校',
    description: 'プログラミング学習を始める。',
    icon: <GraduationCap size={20} />,
    iconBg: 'bg-secondary-500',
    category: 'education',
    image: '/images/timeline/aso.jpg',
  },
  {
    id: 3,
    year: '2023年10月',
    title: '基本情報技術者試験　合格',
    description: '午後試験満点の成績で合格。',
    icon: <Award size={20} />,
    iconBg: 'bg-accent-500',
    category: 'certification',
    image: '/images/timeline/FE.jpg',
  },
  {
    id: 4,
    year: '2023年10月',
    title: '応用情報技術者試験　合格',
    description: '',
    icon: <Award size={20} />,
    iconBg: 'bg-accent-500',
    category: 'certification',
    image: '/images/timeline/AP.jpg',
  },
];

const hackathonItems = [
  {
    id: 1,
    year: '2024年7月',
    title: 'OPEN HACK U 2024 FUKUOKA',
    description: '初めてハッカソンに参加。惜しくも入賞できなかったが、これを機にハッカソンにのめり込む。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/hacktime.jpg',
  },
  {
    id: 2,
    year: '2024年9月',
    title: '株式会社B.P.WORKS LINEbotハッカソン 優勝',
    description: 'LINE Bot を活用したミニゲームを開発。ハッカソンで初めての賞を獲得。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/linebot.jpg',
  },
  {
    id: 3,
    year: '2024年10月',
    title: 'B3 -Blockchain Bootcamp & Business plan Workshop-',
    description: '4か月間に及ぶブロックチェーンキャンプに参加',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/b3.jpg',
  },
  {
    id: 4,
    year: '2024年10月',
    title: 'FUKUOKA学生ビジコン2024 ブロックチェーン部門 ブロックチェーン特別賞',
    description: 'ブロックチェーンを活用した予約券譲渡アプリを考案',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/bizikon.jpg',
  },
  {
    id: 5,
    year: '2024年10月',
    title: 'ブロックチェーンフォーラム',
    description: '福岡ブロックチェーンフォーラム2024に学生代表として登壇',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/forum.jpg',
  },
  {
    id: 6,
    year: '2024年11月',
    title: 'Engineer Driven Day(EDD) 2024  ライブリンクス賞',
    description: '健康管理アプリHealpassを開発。実装作業を単独で担当',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/edd-goma.jpg',
  },
  {
    id: 7,
    year: '2024年12月',
    title: '第9回セキュリティコンテストMBSD Cybersecurity Challenges 2024 最優秀賞',
    description: 'OSINT情報を活用したパッシブスキャンを行うASMツールを開発。39チームの中で最優秀賞を獲得。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/mbsd.jpg',
  },
  {
    id: 8,
    year: '2024年12月',
    title: '九州アプリチャレンジ・キャラバン 2024コンテスト 特別賞',
    description: 'スマホ依存防止アプリ、Share Timeを開発。4校合同チームで見事入賞を果たす。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/charekyara.jpg',
  },
  {
    id: 9,
    year: '2024年12月',
    title: '技育博 サイバーエージェント賞',
    description: '複数の企業が共催するハッカソンに参加し、見事入賞。業界各社やエンジニアとの交流を大きく広げる。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/timeline/gikuhaku.jpg',
  }
];

const TimelineItem = ({ item, index }: { item: typeof timelineItems[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} relative`}>
      {/* Line */}
      <div className="hidden md:block w-1/2"></div>

      <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center text-white`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          {item.icon}
        </motion.div>
      </div>

      <motion.div
        className={`md:w-1/2 mb-8 md:mb-0 ${isEven ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-12 relative`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Mobile timeline icon */}
        <div className="md:hidden absolute top-0 left-0 z-10">
          <div className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center text-white`}>
            {item.icon}
          </div>
          <div className="w-0.5 h-full bg-gray-300 absolute top-8 left-4 transform -translate-x-1/2"></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-3">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            {item.image && (
              <div className="w-full md:w-48 h-32 relative rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HackathonGroup = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3">
            <Code size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">ハッカソン参加歴</h3>
            <p className="text-sm text-gray-600">2024年</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} className="text-gray-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-4">
              {hackathonItems.map((item, index) => (
                <div key={item.id} className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} relative`}>
                  <div className="hidden md:block w-1/2"></div>

                  <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center text-white`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  <motion.div
                    className={`md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-12 relative`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="md:hidden absolute top-0 left-0 z-10">
                      <div className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center text-white`}>
                        {item.icon}
                      </div>
                      <div className="w-0.5 h-full bg-gray-300 absolute top-8 left-4 transform -translate-x-1/2"></div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-3">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        {item.image && (
                          <div className="w-full md:w-48 h-32 relative rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">経歴</h2>
          <p className="section-subtitle mx-auto">
            私の経歴を時系列でご紹介します。
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"></div>

          {/* Timeline Items */}
          <div className="space-y-4">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
            <HackathonGroup />
          </div>
        </div>

        {/* Current Status Card */}
        <div className="mt-32">
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <motion.div
                className="bg-primary-50 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-3">
                      現在
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      <a
                        href="https://aiel.jp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-primary-600 transition-colors"
                      >
                        麻生情報工学研究室(AIEL)
                      </a>
                      を創立。
                    </h3>
                    <p className="text-gray-600 text-lg">同学年4人で非公式の研究室を立ち上げ、数理暗号を専門に勉強中。他にもブロックチェーンや、バックエンド開発など幅広い開発に取り組んでいる。</p>
                  </div>
                  <div className="w-full md:w-64 h-48 relative rounded-lg overflow-hidden">
                    <img
                      src="/images/timeline/kenkyushitu.jpg"
                      alt="現在の活動"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;