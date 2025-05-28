import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code, ChevronDown } from 'lucide-react';

// Timeline data
const timelineItems = [
  {
    id: 1,
    year: '2020 - 2023',
    title: '山口県立萩商工高等学校',
    description: '普通科に在籍。部活動ではバスケットボール部に所属。',
    icon: <GraduationCap size={20} />,
    iconBg: 'bg-secondary-500',
    category: 'education',
    image: '/images/hagishoukou.jpg',
  },
  {
    id: 2,
    year: '2023',
    title: '麻生情報ビジネス専門学校',
    description: 'プログラミング学習を始める。',
    icon: <GraduationCap size={20} />,
    iconBg: 'bg-secondary-500',
    category: 'education',
    image: '/images/aso.jpg',
  },
  {
    id: 3,
    year: '2023　10月',
    title: '基本情報技術者試験　合格',
    description: '午後試験満点の成績で合格。',
    icon: <Award size={20} />,
    iconBg: 'bg-accent-500',
    category: 'certification',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4i2iNhVFDOmb4hflkCqrDkTelri4uvEfbA&s',
  },
  {
    id: 3,
    year: '2023　12月',
    title: '応用情報技術者試験　合格',
    description: 'アルゴリズム等の得意科目でギリギリで合格。',
    icon: <Award size={20} />,
    iconBg: 'bg-accent-500',
    category: 'certification',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4i2iNhVFDOmb4hflkCqrDkTelri4uvEfbA&s',
  },
];

const hackathonItems = [
  {
    id: 1,
    year: '2024年7月',
    title: 'OPEN HACK U 2024 FUKUOKA',
    description: 'チーム開発でWebアプリケーションを制作。フロントエンド開発を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/hacktime.jpg',
  },
  {
    id: 2,
    year: '2024年9月',
    title: '株式会社B.P.WORKS LINEbotハッカソン 優勝',
    description: 'モバイルアプリケーションの開発に参加。バックエンドAPIの実装を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/llinebot.jpg',
  },
  {
    id: 2,
    year: '2024年10月',
    title: 'B3 -Blockchain Bootcamp & Business plan Workshop-',
    description: '4か月間に及ぶブロックチェーンキャンプに参加',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/b3.jpg',
  },
  {
    id: 3,
    year: '2024年10月',
    title: 'FUKUOKA学生ビジコン2024 ブロックチェーン部門 ブロックチェーン特別賞',
    description: 'AIを活用したWebサービスを開発。フルスタック開発を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/bizikon.jpg',
  },
  {
    id: 4,
    year: '2024年10月',
    title: 'ブロックチェーンフォーラム',
    description: 'AIを活用したWebサービスを開発。フルスタック開発を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/forum.jpg',
  },
  {
    id: 4,
    year: '2024年11月',
    title: 'Engineer Driven Day(EDD) 2024  ライブリンクス賞',
    description: 'AIを活用したWebサービスを開発。フルスタック開発を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/edd-goma.jpg',
  },
  {
    id: 5,
    year: '2024年12月',
    title: '第9回セキュリティコンテストMBSD Cybersecurity Challenges 2024 最優秀賞',
    description: 'AIを活用したWebサービスを開発。フルスタック開発を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/mbsd.jpg',
  },
  {
    id: 6,
    year: '2024年12月',
    title: '九州アプリチャレンジ・キャラバン 2024コンテスト 健闘賞',
    description: 'AIを活用したWebサービスを開発。フルスタック開発を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/charekyara.jpg',
  },
  {
    id: 4,
    year: '2024年12月',
    title: '技育博 サイバーエージェント賞',
    description: 'AIを活用したWebサービスを開発。フルスタック開発を担当。',
    icon: <Code size={20} />,
    iconBg: 'bg-primary-500',
    image: '/images/gikuhaku.jpg',
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
            <p className="text-sm text-gray-600">2023年</p>
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">同学年4人で非公式の研究室を立ち上げる。</h3>
                    <p className="text-gray-600 text-lg">Webアプリケーション開発、モバイルアプリ開発、AI活用サービス開発に従事。</p>
                  </div>
                  <div className="w-full md:w-64 h-48 relative rounded-lg overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4i2iNhVFDOmb4hflkCqrDkTelri4uvEfbA&s"
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