import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { AnimatePresence } from 'framer-motion';
import { SiGo, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiRust, SiPhp, SiCplusplus, SiMysql, SiPostgresql, SiMongodb, SiDocker, SiKubernetes, SiAmazon, SiGithub, SiGitlab, SiVercel, SiNetlify, SiVuedotjs, SiAngular, SiGit, SiHtml5, SiCss3, SiFirebase, SiLinux } from 'react-icons/si';
import { FaJava, FaStar, FaRegStar, FaStarHalfAlt, FaInfoCircle, FaDatabase, FaCode } from 'react-icons/fa';

// Data for skill categories
const skillCategories = [
  {
    name: 'バックエンド',
    icon: '🔧',
    skills: [
      {
        name: 'PostgreSQL',
        level: 80,
        description: 'ほぼすべてのアプリケーションで使用。主にPostgreSQLを使用。',
        useCases: [
          'ECサイトの作成。',
          '複数のハッカソンで使用。',
          'Firebase で使用。',
        ]
      },
      {
        name: 'Python',
        level: 85,
        description: '競技プログラミングやアルゴリズム学習で使用。脆弱性診断ツールの作成のスキャン機能実装にも使用。',
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
        description: '独学で学習。簡易ベクトル検索アプリを作成。',
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
        description: '授業で学習。マインスイーバーや自動探索迷路などミニゲームを作成。',
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
        description: '授業で学習。実際にECサイトを作成。',
        useCases: [
          'Laravelフレームワークを使用した開発',
          'CMSのカスタマイズと拡張',
          'Eコマースサイトの開発',
          'レガシーシステムの保守'
        ]
      },
      {
        name: 'Rust',
        level: 45,
        description: 'システムプログラミングの学習として使用。',
        useCases: [
          'メモリ安全性を重視したアプリケーション開発',
          'システムツールの作成',
          'WebAssemblyを使用したWebアプリケーション',
          'パフォーマンスクリティカルな処理の実装'
        ]
      },
      {
        name: 'C++',
        level: 40,
        description: '競技プログラミングで使用。',
        useCases: [
          'アルゴリズムの実装',
          'パフォーマンス最適化',
          'システムレベルのプログラミング',
          'ゲーム開発'
        ]
      },
    ],
    chartData: [
      { subject: 'PostgreSQL', A: 80 },
      { subject: 'Python', A: 85 },
      { subject: 'Go', A: 70 },
      { subject: 'Java', A: 65 },
      { subject: 'PHP', A: 60 },
      { subject: 'Rust', A: 45 },
      { subject: 'C++', A: 40 },
    ],
    description: '普段は、バックエンドを専門に開発をしています。最近は、C++やRustを使ったリアルタイムアプリケーションの開発などにも挑戦しています。'
  },
  {
    name: 'フロントエンド',
    icon: '🎨',
    skills: [
      {
        name: 'React',
        level: 85,
        description: '複数のハッカソンでアプリ開発に使用。',
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
        description: '複数のハッカソンでアプリ開発に使用。',
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
        description: '授業で学習。CSSは主にtailwind.cssを開発に利用。',
        useCases: [
          'モダンなレイアウトの作成',
          'アニメーションとトランジション',
          'アクセシビリティの実装',
          'CSSフレームワークの活用'
        ]
      },
      {
        name: 'Vue.js',
        level: 40,
        description: '授業で学習。カレンダーアプリやToDoなど簡易アプリを作成。',
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
      {
        name: 'Next.js',
        level: 75,
        description: 'Reactベースのフレームワーク。SSRやSSGを活用した開発。',
        useCases: [
          'サーバーサイドレンダリングの実装',
          '静的サイト生成の活用',
          'APIルートの実装',
          'パフォーマンス最適化'
        ]
      },
      {
        name: 'Tailwind CSS',
        level: 85,
        description: 'ユーティリティファーストのCSSフレームワーク。',
        useCases: [
          'レスポンシブデザインの実装',
          'カスタムテーマの作成',
          'コンポーネントのスタイリング',
          'アニメーションの実装'
        ]
      },
    ],
    chartData: [
      { subject: 'React', A: 85 },
      { subject: 'TypeScript', A: 80 },
      { subject: 'HTML/CSS', A: 90 },
      { subject: 'Vue.js', A: 40 },
      { subject: 'Angular', A: 50 },
      { subject: 'Next.js', A: 75 },
      { subject: 'Tailwind CSS', A: 85 },
    ],
    description: 'ハッカソン参加時には、フロントエンド領域も担当します。最近は、boltやcursorを使った高速なフロントエンド開発にはまっています。'
  },
  {
    name: 'ツール',
    icon: '🚀',
    skills: [
      {
        name: 'Docker',
        level: 70,
        description: 'アプリ制作時の開発環境構築に使用。',
        useCases: [
          'マイクロサービスのコンテナ化',
          'マルチステージビルドの最適化',
          'Docker Composeによる環境構築',
          'コンテナのセキュリティ設定'
        ]
      },
      {
        name: 'Kubernetes',
        level: 50,
        description: '簡易ベクトル検索アプリ作成時に使用。',
        useCases: [
          'クラスターの設計と構築',
          'デプロイメントの自動化',
          'スケーリングの設定',
          'サービスのディスカバリー'
        ]
      },
      {
        name: 'AWS',
        level: 30,
        description: '授業でAWS Academyを修了。簡単なデモアプリで使用。',
        useCases: [
          'EC2インスタンスの管理',
          'S3を使用したストレージ管理',
          'Lambda関数の実装',
          'CloudFormationによるIaC'
        ]
      },
      {
        name: 'Firebase',
        level: 80,
        description: 'ハッカソン参加時のアプリ製作で使用。主要機能の大半の利用経験あり。',
        useCases: [
          'Firebase Authenticationによるユーザー管理',
          'Cloud Firestoreでのデータ永続化',
          'Cloud Functionsによるバックエンド処理の実装',
          'HostingとGitHub Actionsを連携したCI/CDパイプライン構築'
        ]
      },
      {
        name: 'Linux',
        level: 70,
        description: 'WindowsのWSL2環境で使用。開発時など基本的にLinuxを使用。',
        useCases: [
          'シェルスクリプトによる開発環境の自動構築',
          'GitやDockerなどのCLI操作',
          'プロジェクトごとの環境分離とパッケージ管理',
          'サーバーログの確認やネットワーク設定の調整'
        ]
      },
      {
        name: 'Git',
        level: 85,
        description: 'バージョン管理システム。チーム開発で日常的に使用。',
        useCases: [
          'ブランチ戦略の実装',
          'GitHub ActionsによるCI/CD',
          'コードレビューの実施',
          'コンフリクトの解決'
        ]
      },
      {
        name: 'VSCode',
        level: 90,
        description: '主要な開発エディタ。拡張機能を活用した効率的な開発。',
        useCases: [
          'デバッグとデバッグ設定',
          '拡張機能の活用',
          'キーボードショートカットの活用',
          'リモート開発環境の構築'
        ]
      },
    ],
    chartData: [
      { subject: 'Docker', A: 70 },
      { subject: 'Kubernetes', A: 50 },
      { subject: 'AWS', A: 30 },
      { subject: 'Firebase', A: 80 },
      { subject: 'Linux', A: 70 },
      { subject: 'Git', A: 85 },
      { subject: 'VSCode', A: 90 },
    ],
    description: '主要なツールは一通り触れたことがあります。最近は、Kubernetesやsupabaseを触っています。'
  }
];

const SkillIcon = ({ name, level }: { name: string; level: number }) => {
  const getIcon = () => {
    switch (name) {
      case 'Go': return <SiGo className="w-8 h-8 text-blue-600" />;
      case 'Python': return <SiPython className="w-8 h-8 text-yellow-500" />;
      case 'Rust': return <SiRust className="w-8 h-8 text-orange-600" />;
      case 'PHP': return <SiPhp className="w-8 h-8 text-purple-600" />;
      case 'Java': return <FaJava className="w-8 h-8 text-red-600" />;
      case 'C++': return <SiCplusplus className="w-8 h-8 text-blue-500" />;
      case 'React': return <SiReact className="w-8 h-8 text-blue-400" />;
      case 'Next.js': return <SiNextdotjs className="w-8 h-8 text-gray-800" />;
      case 'Tailwind CSS': return <SiTailwindcss className="w-8 h-8 text-cyan-500" />;
      case 'TypeScript': return <SiTypescript className="w-8 h-8 text-blue-600" />;
      case 'PostgreSQL': return <SiPostgresql className="w-8 h-8 text-blue-500" />;
      case 'MongoDB': return <SiMongodb className="w-8 h-8 text-green-600" />;
      case 'Docker': return <SiDocker className="w-8 h-8 text-blue-600" />;
      case 'Kubernetes': return <SiKubernetes className="w-8 h-8 text-blue-500" />;
      case 'AWS': return <SiAmazon className="w-8 h-8 text-orange-500" />;
      case 'GitHub': return <SiGithub className="w-8 h-8 text-gray-800" />;
      case 'GitLab': return <SiGitlab className="w-8 h-8 text-orange-600" />;
      case 'Vercel': return <SiVercel className="w-8 h-8 text-gray-800" />;
      case 'Netlify': return <SiNetlify className="w-8 h-8 text-teal-500" />;
      case 'Vue.js': return <SiVuedotjs className="w-8 h-8 text-green-500" />;
      case 'Angular': return <SiAngular className="w-8 h-8 text-red-600" />;
      case 'Git': return <SiGit className="w-8 h-8 text-orange-600" />;
      case 'VSCode': return <FaCode className="w-8 h-8 text-blue-500" />;
      case 'SQL': return <FaDatabase className="w-8 h-8 text-blue-600" />;
      case 'HTML/CSS': return (
        <div className="flex items-center justify-center space-x-1">
          <SiHtml5 className="w-6 h-6 text-orange-500" />
          <SiCss3 className="w-6 h-6 text-blue-500" />
        </div>
      );
      case 'Firebase': return <SiFirebase className="w-8 h-8 text-orange-500" />;
      case 'Linux': return <SiLinux className="w-8 h-8 text-gray-800" />;
      default: return null;
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(level / 20);
    const hasHalfStar = level % 20 >= 10;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="flex flex-col items-center p-2">
      <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
        {getIcon()}
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <div className="flex mt-1">
        {renderStars()}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);
  const [showInfo, setShowInfo] = useState(false);

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

          {/* Skills Grid */}
          <motion.div
            className="lg:w-1/2"
            key={`grid-${activeCategory}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {skillCategories[activeCategory].name} Skills
                </h3>
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-full transition-colors shadow-sm hover:shadow-md"
                  >
                    <FaInfoCircle size={24} />
                  </button>
                  {showInfo && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white p-3 rounded-lg shadow-lg text-xs text-gray-600 z-10">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaStar size={10} />
                          </div>
                          <span>実務で使用</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaRegStar size={10} />
                          </div>
                          <span>個人開発で使用</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaRegStar size={10} />
                            <FaRegStar size={10} />
                          </div>
                          <span>学習済み</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            <FaStar size={10} />
                            <FaStar size={10} />
                            <FaRegStar size={10} />
                            <FaRegStar size={10} />
                            <FaRegStar size={10} />
                          </div>
                          <span>基礎学習中</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            <FaStar size={10} />
                            <FaRegStar size={10} />
                            <FaRegStar size={10} />
                            <FaRegStar size={10} />
                            <FaRegStar size={10} />
                          </div>
                          <span>触った程度</span>
                        </div>
                      </div>
                      <div className="absolute right-4 top-0 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skillCategories[activeCategory].skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => handleSkillHover(skill)}
                    onMouseLeave={handleSkillLeave}
                    className="hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <SkillIcon name={skill.name} level={skill.level} />
                  </div>
                ))}
              </div>

              <p className="text-gray-600 mt-6">
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