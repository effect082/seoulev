
import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Info,
  Layers,
  Presentation,
  FileText,
  BarChart3,
  Lightbulb
} from 'lucide-react';
import SlideContent from './components/SlideContent';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13; 

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(0, prev - 1));

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50">
      {/* Top Header */}
      <header className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Presentation size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">강동어울림복지관 서울형 평가 분석 설명회</h1>
            <p className="text-sm text-slate-500">2026-2027 사업 성과 전략 프레임워크</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-400">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div className="flex gap-1">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Slide Content */}
      <main className="flex-1 relative overflow-auto custom-scrollbar p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl min-h-[650px] border border-slate-100 flex flex-col">
          <SlideContent slideIndex={currentSlide} />
        </div>
      </main>

      {/* Progress Bar */}
      <div className="h-1 bg-slate-200">
        <div 
          className="h-full bg-indigo-600 transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Quick Navigation Footer */}
      <footer className="bg-white border-t p-4 px-8 flex justify-between items-center text-xs text-slate-400">
        <div className="flex gap-6">
          <span className="flex items-center gap-1"><FileText size={14} /> 2026 장애인복지관 지표(안) 반영</span>
          <span className="flex items-center gap-1"><Layers size={14} /> 서울형 평가 분석틀 고도화</span>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-indigo-600 scale-125' : 'bg-slate-200'}`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
