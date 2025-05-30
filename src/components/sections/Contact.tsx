import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ExternalLink, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-primary-900 to-primary-800 text-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-section relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-100">
            お問い合わせ
          </h2>
          <p className="section-subtitle text-primary-50 mx-auto max-w-2xl">
            お仕事のご依頼やご質問は、以下のフォームからお気軽にご連絡ください。
          </p>
        </motion.div>

        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            {/* 上部：連絡先情報と対応可能案件 */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 左側：連絡先情報 */}
              <div className="bg-gradient-to-br from-primary-800/40 to-primary-900/40 p-8 rounded-3xl backdrop-blur-sm border border-primary-700/30 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full mr-3"></span>
                  連絡先情報
                </h3>

                <div className="space-y-6">
                  <motion.a
                    href="mailto:2301016@s.asojuku.ac.jp"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-start p-4 bg-gradient-to-r from-primary-700/30 to-primary-800/30 rounded-2xl hover:from-primary-700/40 hover:to-primary-800/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-br from-primary-600/50 to-primary-700/50 p-3 rounded-xl mr-4 shadow-inner">
                      <Mail size={24} className="text-primary-100" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">メール</h4>
                      <p className="text-primary-100">2301016@s.asojuku.ac.jp</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Sh1ragami"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-start p-4 bg-gradient-to-r from-primary-700/30 to-primary-800/30 rounded-2xl hover:from-primary-700/40 hover:to-primary-800/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-br from-primary-600/50 to-primary-700/50 p-3 rounded-xl mr-4 shadow-inner">
                      <Github size={24} className="text-primary-100" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">GitHub</h4>
                      <p className="text-primary-100">Sh1ragami</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://qiita.com/Sh1ragami"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-start p-4 bg-gradient-to-r from-primary-700/30 to-primary-800/30 rounded-2xl hover:from-primary-700/40 hover:to-primary-800/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-br from-primary-600/50 to-primary-700/50 p-3 rounded-xl mr-4 shadow-inner">
                      <MessageSquare size={24} className="text-primary-100" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">Qiita</h4>
                      <p className="text-primary-100">@Sh1ragami</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* 右側：対応可能な内容 */}
              <div className="bg-gradient-to-br from-primary-800/40 to-primary-900/40 p-8 rounded-3xl backdrop-blur-sm border border-primary-700/30 shadow-2xl">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-6 h-1 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full mr-3"></span>
                  対応可能な内容
                </h4>
                <ul className="space-y-4">
                  <motion.li
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center p-4 bg-gradient-to-r from-primary-700/30 to-primary-800/30 rounded-2xl shadow-lg"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-300 rounded-full mr-3"></span>
                    インターン募集
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center p-4 bg-gradient-to-r from-primary-700/30 to-primary-800/30 rounded-2xl shadow-lg"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-300 rounded-full mr-3"></span>
                    ハッカソン等の登壇、参加
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center p-4 bg-gradient-to-r from-primary-700/30 to-primary-800/30 rounded-2xl shadow-lg"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-300 rounded-full mr-3"></span>
                    新卒求人　など
                  </motion.li>
                </ul>
              </div>
            </div>

            {/* 下部：お問い合わせフォーム */}
            <div className="bg-gradient-to-br from-primary-800/40 to-primary-900/40 backdrop-blur-sm p-8 rounded-3xl border border-primary-700/30 shadow-2xl">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    お気軽にご連絡ください
                  </h3>
                  <p className="text-primary-100 text-sm">
                    一週間以内にご返信いたします
                  </p>
                </div>

                <div className="flex justify-center space-x-4 text-primary-100 text-sm mb-6">
                  <div className="flex items-center bg-primary-700/30 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    迅速な対応
                  </div>
                  <div className="flex items-center bg-primary-700/30 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    丁寧な返信
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 hover:from-primary-500 hover:via-primary-400 hover:to-primary-500 text-white py-4 px-6 rounded-2xl font-medium flex items-center justify-center transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScgZV-IhEgJt0IZ1Pn4uhb790ftKh-YFlAdgYXOjnGgpRx1gg/viewform", "_blank")}
                >
                  お問い合わせフォームを開く
                  <ExternalLink size={20} className="ml-2" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
