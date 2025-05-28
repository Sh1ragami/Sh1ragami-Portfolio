import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { AnimatePresence } from 'framer-motion';

// Data for skill categories
const skillCategories = [
  {
    name: 'Backend',
    icon: '🔧',
    skills: [
      {
        name: 'Node.js',
        level: 90,
        description: 'マイクロサービスアーキテクチャの構築と運用',
        useCases: [
          'RESTful APIの開発と最適化',
          'GraphQLサービスの実装',
          'WebSocketを使用したリアルタイム通信',
          'バックグラウンドジョブの処理'
        ]
      },
      {
        name: 'Python',
        level: 85,
        description: 'データ処理と機械学習の実装',
        useCases: [
          'データ分析パイプラインの構築',
          '機械学習モデルの開発とデプロイ',
          '自動化スクリプトの作成',
          'APIの開発とテスト'
        ]
      },
      {
        name: 'Go',
        level: 70,
        description: '高性能なバックエンドサービスの開発',
        useCases: [
          '高負荷なAPIサービスの実装',
          '並行処理を活用したデータ処理',
          'マイクロサービスの開発',
          'CLIツールの作成'
        ]
      },
      {
        name: 'Java',
        level: 65,
        description: 'エンタープライズアプリケーションの開発',
        useCases: [
          'Spring Bootを使用したWebアプリケーション',
          'マルチスレッドアプリケーションの開発',
          'レガシーシステムの保守と改善',
          'Androidアプリケーションの開発'
        ]
      },
      {
        name: 'PHP',
        level: 60,
        description: 'Webアプリケーションの開発と保守',
        useCases: [
          'Laravelフレームワークを使用した開発',
          'CMSのカスタマイズと拡張',
          'Eコマースサイトの開発',
          'レガシーシステムの保守'
        ]
      },
    ],
    chartData: [
      { subject: 'Node.js', A: 90 },
      { subject: 'Python', A: 85 },
      { subject: 'Go', A: 70 },
      { subject: 'Java', A: 65 },
      { subject: 'PHP', A: 60 },
    ],
    description: 'Extensive experience with Node.js microservices and Python data processing pipelines. Proficient in developing RESTful APIs and GraphQL services.'
  },
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      {
        name: 'React',
        level: 85,
        description: 'モダンなWebアプリケーションの開発',
        useCases: [
          'SPAの開発と最適化',
          'コンポーネントライブラリの作成',
          '状態管理（Redux, Context API）',
          'カスタムフックの実装'
        ]
      },
      {
        name: 'TypeScript',
        level: 80,
        description: '型安全なフロントエンド開発',
        useCases: [
          '型定義の作成と管理',
          'インターフェースの設計',
          'ユーティリティ型の活用',
          'コードの品質向上'
        ]
      },
      {
        name: 'HTML/CSS',
        level: 90,
        description: 'レスポンシブなUIの実装',
        useCases: [
          'モダンなレイアウトの作成',
          'アニメーションとトランジション',
          'アクセシビリティの実装',
          'CSSフレームワークの活用'
        ]
      },
      {
        name: 'Vue.js',
        level: 60,
        description: 'コンポーネントベースの開発',
        useCases: [
          'Vuexを使用した状態管理',
          'Vue Routerによるルーティング',
          'コンポーネントの再利用',
          'Nuxt.jsを使用した開発'
        ]
      },
      {
        name: 'Angular',
        level: 50,
        description: 'エンタープライズ向けアプリケーション開発',
        useCases: [
          'モジュールベースの開発',
          '依存性注入の活用',
          'RxJSを使用した非同期処理',
          'Angular Materialの活用'
        ]
      },
    ],
    chartData: [
      { subject: 'React', A: 85 },
      { subject: 'TypeScript', A: 80 },
      { subject: 'HTML/CSS', A: 90 },
      { subject: 'Vue.js', A: 60 },
      { subject: 'Angular', A: 50 },
    ],
    description: 'Focused on building responsive and accessible interfaces with React and TypeScript. Experienced with modern CSS frameworks and animation libraries.'
  },
  {
    name: 'DevOps',
    icon: '🚀',
    skills: [
      {
        name: 'Docker',
        level: 90,
        description: 'コンテナ化されたアプリケーションの開発と運用',
        useCases: [
          'マイクロサービスのコンテナ化',
          'マルチステージビルドの最適化',
          'Docker Composeによる環境構築',
          'コンテナのセキュリティ設定'
        ]
      },
      {
        name: 'Kubernetes',
        level: 75,
        description: 'コンテナオーケストレーション',
        useCases: [
          'クラスターの設計と構築',
          'デプロイメントの自動化',
          'スケーリングの設定',
          'サービスのディスカバリー'
        ]
      },
      {
        name: 'AWS',
        level: 85,
        description: 'クラウドインフラストラクチャの構築と運用',
        useCases: [
          'EC2インスタンスの管理',
          'S3を使用したストレージ管理',
          'Lambda関数の実装',
          'CloudFormationによるIaC'
        ]
      },
      {
        name: 'CI/CD',
        level: 80,
        description: '継続的インテグレーションとデプロイメント',
        useCases: [
          'GitHub Actionsの設定',
          'Jenkinsパイプラインの構築',
          '自動テストの実装',
          'デプロイメントの自動化'
        ]
      },
      {
        name: 'Terraform',
        level: 70,
        description: 'インフラストラクチャのコード化',
        useCases: [
          'クラウドリソースの管理',
          'モジュールの作成と再利用',
          '状態管理の最適化',
          'マルチクラウド環境の構築'
        ]
      },
    ],
    chartData: [
      { subject: 'Docker', A: 90 },
      { subject: 'Kubernetes', A: 75 },
      { subject: 'AWS', A: 85 },
      { subject: 'CI/CD', A: 80 },
      { subject: 'Terraform', A: 70 },
    ],
    description: 'Implemented containerized environments with Docker and Kubernetes. Deployed and managed infrastructure on AWS using Terraform and CloudFormation.'
  }
];

const SkillItem = ({ skill, categoryIndex }: { skill: any, categoryIndex: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${categoryIndex === 0
            ? 'bg-primary-600'
            : categoryIndex === 1
              ? 'bg-secondary-600'
              : 'bg-accent-600'
            }`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);

  const handleSkillHover = (skill: any) => {
    setHoveredSkill(skill);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  const renderSkillDetail = (skill: any) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-md h-full"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{skill.name}</h3>
        <p className="text-gray-600 mb-6">{skill.description}</p>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-700">主な使用例:</h4>
          <ul className="space-y-2">
            {skill.useCases.map((useCase: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary-600">•</span>
                <span className="text-gray-600">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="bg-gray-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">技術スタック</h2>
          <p className="section-subtitle mx-auto">
            私の技術スタックはこちらになります。学んだだけのモノではなく、実際に開発で使用したもののみを掲載しています。
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${activeCategory === index
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Chart or Skill Detail */}
          <motion.div
            className="lg:w-1/2 h-80 w-full"
            key={hoveredSkill ? `detail-${hoveredSkill.name}` : `chart-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {hoveredSkill ? (
              renderSkillDetail(hoveredSkill)
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={skillCategories[activeCategory].chartData}
                >
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#4b5563' }} />
                  <Radar
                    name={skillCategories[activeCategory].name}
                    dataKey="A"
                    stroke={activeCategory === 0 ? "#4f46e5" : activeCategory === 1 ? "#0d9488" : "#ea580c"}
                    fill={activeCategory === 0 ? "#4f46e5" : activeCategory === 1 ? "#0d9488" : "#ea580c"}
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Skills List */}
          <motion.div
            className="lg:w-1/2"
            key={`list-${activeCategory}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {skillCategories[activeCategory].name} Skills
              </h3>

              <div className="space-y-4 mb-6">
                {skillCategories[activeCategory].skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => handleSkillHover(skill)}
                    onMouseLeave={handleSkillLeave}
                  >
                    <SkillItem
                      skill={skill}
                      categoryIndex={activeCategory}
                    />
                  </div>
                ))}
              </div>

              <p className="text-gray-600 mt-4">
                {skillCategories[activeCategory].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;