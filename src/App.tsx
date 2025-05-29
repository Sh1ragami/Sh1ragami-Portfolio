import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Timeline from './components/sections/Timeline';
import Works from './components/sections/Works';
import Articles from './components/sections/Articles';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
}

interface Crow {
  id: number;
  image: string;
  style: React.CSSProperties;
  className: string;
  isExploding: boolean;
}

interface ScorePopup {
  id: number;
  x: number;
  y: number;
  score: number;
  timestamp: number;
}

function App() {
  const [crows, setCrows] = useState<Crow[]>([
    {
      id: 1,
      image: '/images/parukara_gen2.png',
      style: { top: '20%', left: '10%' },
      className: 'absolute w-24 h-24 animate-fly transition-opacity duration-200 cursor-pointer',
      isExploding: false
    },
    {
      id: 2,
      image: '/images/parukara_gen2.png',
      style: { top: '40%', right: '20%' },
      className: 'absolute w-20 h-20 animate-fly-delayed transition-opacity duration-200 cursor-pointer',
      isExploding: false
    },
    {
      id: 3,
      image: '/images/parukara_gen2.png',
      style: { bottom: '30%', left: '30%' },
      className: 'absolute w-28 h-28 animate-fly-delayed-2 transition-opacity duration-200 cursor-pointer',
      isExploding: false
    }
  ]);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [nextId, setNextId] = useState(0);
  const [score, setScore] = useState(0);
  const [scorePopups, setScorePopups] = useState<ScorePopup[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCrows(prev => prev.map(crow => ({
        ...crow,
        image: crow.image === '/images/parukara_gen2.png'
          ? '/images/parukara_gen3.png'
          : '/images/parukara_gen2.png'
      })));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 音声ファイルを読み込む
    audioRef.current = new Audio('/sounds/crow.mp3');
  }, []);

  // スコアポップアップの自動削除
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setScorePopups(prev => prev.filter(popup => now - popup.timestamp < 1000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getRandomPosition = () => {
    const positions = [
      { top: `${Math.random() * 60}%`, left: `${Math.random() * 60}%` },
      { top: `${Math.random() * 60}%`, right: `${Math.random() * 60}%` },
      { bottom: `${Math.random() * 60}%`, left: `${Math.random() * 60}%` },
      { bottom: `${Math.random() * 60}%`, right: `${Math.random() * 60}%` }
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const createFirework = (x: number, y: number) => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const particles = Array.from({ length: 24 }, (_, i) => ({
      id: nextId + i,
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: (i * 15) % 360
    }));
    setFireworks(prev => [...prev, ...particles]);
    setNextId(prev => prev + 24);
  };

  const handleCrowClick = (e: React.MouseEvent, crowId: number) => {
    // イベントの伝播を停止
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // 音声を再生
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error('音声の再生に失敗しました:', error);
      });
    }

    // スコア加算とポップアップ表示
    const newScore = score + 100;
    setScore(newScore);
    setScorePopups(prev => [...prev, {
      id: Date.now(),
      x,
      y,
      score: newScore,
      timestamp: Date.now()
    }]);

    // カラスを爆発状態に
    setCrows(prev => prev.map(crow =>
      crow.id === crowId
        ? { ...crow, isExploding: true, className: `${crow.className} animate-explode` }
        : crow
    ));

    createFirework(x, y);

    // 1秒後にカラスを新しい位置に再表示
    setTimeout(() => {
      setCrows(prev => prev.map(crow =>
        crow.id === crowId
          ? {
            ...crow,
            isExploding: false,
            className: crow.className.replace(' animate-explode', ''),
            style: getRandomPosition()
          }
          : crow
      ));
    }, 1000);
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 relative">
      <Navbar />
      <main>
        <div className="relative overflow-hidden">
          <Hero />
          {/* Animated Crow Background */}
          <div className="absolute inset-0 z-10">
            {crows.map(crow => (
              <img
                key={crow.id}
                src={crow.image}
                alt="Flying Crow"
                className={crow.className}
                style={crow.style}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCrowClick(e, crow.id);
                }}
              />
            ))}

            {/* Firework Effects */}
            {fireworks.map(firework => (
              <div
                key={firework.id}
                className="absolute w-2 h-2 rounded-full animate-firework pointer-events-none"
                style={{
                  left: firework.x,
                  top: firework.y,
                  backgroundColor: firework.color,
                  '--angle': `${firework.angle}deg`
                } as React.CSSProperties}
              />
            ))}

            {/* Score Popups */}
            {scorePopups.map(popup => (
              <div
                key={popup.id}
                className="absolute text-2xl font-bold text-primary-600 animate-score-pop pointer-events-none"
                style={{
                  left: popup.x,
                  top: popup.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {popup.score}
              </div>
            ))}
          </div>
        </div>
        <About />
        <Skills />
        <Timeline />
        <Works />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;