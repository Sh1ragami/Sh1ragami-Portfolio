import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-primary-900 text-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title text-white">お問い合わせ</h2>
          <p className="section-subtitle text-primary-100 mx-auto">
            お仕事のご依頼やご質問は、以下のフォームからお気軽にご連絡ください。
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">連絡先情報</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-700/50 p-3 rounded-lg mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">メール</h4>
                    <p className="text-primary-100">2301016@s.asojuku.ac.jp</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-700/50 p-3 rounded-lg mr-4">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">SNS</h4>
                    <div className="text-primary-100">
                      <p className="mb-1">GitHub: Sh1ragami</p>
                      <p>Quita: Sh1ragami</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary-600 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">対応可能な内容</h4>
                <ul className="text-primary-50 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    インターン募集
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    ハッカソン等の登壇、参加
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    新卒求人
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">メッセージを送る</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="お名前を入力"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="メールアドレスを入力"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="件名を入力"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="メッセージを入力"
                  ></textarea>
                </div>

                <div>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
                    onClick={() => window.open("https://forms.gle/exampleFormLink", "_blank")}
                  >
                    メッセージを送信
                    <Send size={18} className="ml-2" />
                  </motion.button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    または Google フォームから直接お問い合わせいただけます。
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
