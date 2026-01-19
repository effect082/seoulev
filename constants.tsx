
import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell, 
  PieChart, 
  Pie, 
  Legend 
} from 'recharts';
import { 
  Users, 
  Heart, 
  ShieldCheck, 
  Target, 
  ClipboardCheck, 
  Zap, 
  ArrowRightLeft, 
  GraduationCap, 
  Search,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Info,
  Lightbulb,
  ArrowRight,
  ArrowDown,
  Briefcase,
  CheckCircle2,
  FileSearch,
  Share2,
  Network,
  Upload,
  Image as ImageIcon,
  XCircle,
  RefreshCw
} from 'lucide-react';
import { Slide } from './types';

// Component for the dynamic image upload in Slide 2
const ImageUploadSlide: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('analysis_framework_image');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        localStorage.setItem('analysis_framework_image', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setImage(null);
    localStorage.removeItem('analysis_framework_image');
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 overflow-hidden relative group">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {!image ? (
        <div 
          onClick={triggerUpload}
          className="flex flex-col items-center gap-4 cursor-pointer hover:bg-slate-100 p-12 rounded-3xl transition-all"
        >
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
            <Upload size={40} />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-slate-800">분석틀 이미지 업로드</h4>
            <p className="text-slate-500 mt-2">클릭하여 준비하신 '서울형 평가 분석틀' 이미지를 선택해 주세요.</p>
            <p className="text-[11px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Supported: JPG, PNG, GIF</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner overflow-hidden">
            <img 
              src={image} 
              alt="Uploaded Analysis Framework" 
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Hover Overlay Controls */}
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <button 
                onClick={triggerUpload}
                className="flex items-center gap-2 px-4 py-2 bg-white text-slate-800 rounded-full font-bold text-sm shadow-lg hover:bg-indigo-50 transition-colors"
              >
                <RefreshCw size={16} /> 이미지 교체
              </button>
              <button 
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full font-bold text-sm shadow-lg hover:bg-red-600 transition-colors"
              >
                <XCircle size={16} /> 초기화
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const changeData = [
  { name: '관리지표', old: 11, new: 8, color: '#6366f1' },
  { name: '조직역량', old: 4, new: 9, color: '#ec4899' },
  { name: '사업역량', old: 8, new: 6, color: '#10b981' },
];

export const evaluationSlides: Slide[] = [
  {
    id: 0,
    title: "2026-2027 서울형 평가 분석 및 전략 설명회",
    subtitle: "복지관 미션과 5대 사업목표에 기반한 대응 전략",
    category: "Intro",
    content: (
      <div className="h-full flex flex-col justify-center items-center text-center">
        <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mb-12">
          <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
            <h4 className="text-indigo-900 font-bold text-lg mb-4">강동어울림복지관 미션</h4>
            <p className="text-slate-700 italic">"장애주민이 꿈꾸는 길을 함께 걷는 파트너"</p>
          </div>
          <div className="bg-pink-50 p-8 rounded-2xl border border-pink-100">
            <h4 className="text-pink-900 font-bold text-lg mb-4">평가 지향점</h4>
            <p className="text-slate-700">"최저 기준 유지" 에서 "성과 창출"로의 패러다임 전환</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">#서울형평가</span>
          <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">#성과지표</span>
          <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">#ESG경영</span>
          <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">#인권증진</span>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "서울형 평가 분석틀",
    subtitle: "지역사회복지 중심의 사회복지시설 운영 체계",
    category: "Analysis Framework",
    content: <ImageUploadSlide />
  },
  {
    id: 2,
    title: "우리 복지관의 철학과 인재상",
    subtitle: "평가 지표의 근간이 되는 기관 운영 원칙",
    category: "Foundation",
    content: (
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-bold text-slate-800 text-lg mb-1">비전</h4>
            <p className="text-slate-600">행복한 오늘을 누리는 장애주민! 지역과 함께 변화를 이끌어가는 복지관!</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-bold text-slate-800 text-lg mb-1">핵심가치: 어울림(Fit & Society)</h4>
            <div className="flex gap-2 mt-2">
              <span className="bg-slate-100 px-3 py-1 rounded text-sm">존중</span>
              <span className="bg-slate-100 px-3 py-1 rounded text-sm">성장</span>
              <span className="bg-slate-100 px-3 py-1 rounded text-sm">도전</span>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Users size={20} className="text-indigo-600" /> 강동어울림 인재상 (WITH)
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-white rounded border border-slate-100 shadow-sm">
                <span className="font-bold text-indigo-600">W</span>isdom (지혜로운)
              </div>
              <div className="p-3 bg-white rounded border border-slate-100 shadow-sm">
                <span className="font-bold text-pink-600">I</span>nnovation (혁신적인)
              </div>
              <div className="p-3 bg-white rounded border border-slate-100 shadow-sm">
                <span className="font-bold text-blue-600">T</span>rust (믿음직한)
              </div>
              <div className="p-3 bg-white rounded border border-slate-100 shadow-sm">
                <span className="font-bold text-emerald-600">H</span>umanism (따뜻한)
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-900 rounded-2xl p-8 text-white flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target size={24} /> 5대 사업목표
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center font-bold">1</span>
              <span>지역사회에서 어울리는 복지관 (Fit & Society)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center font-bold">2</span>
              <span>이용인 중심의 서비스 지원</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center font-bold">3</span>
              <span>신사회적 위험 지원체계 구축</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center font-bold">4</span>
              <span>지역주민과 함께하는 공간조성</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center font-bold">5</span>
              <span>모두가 꿈꾸는 성장조직</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "사업 기획 및 평가 (대표사업) 분석",
    subtitle: "사업의 전문성, 체계성, 그리고 변화의 증명",
    category: "Indicator Focus",
    content: (
      <div className="h-full flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <ClipboardCheck className="text-indigo-600" /> 평가의 목적 및 기간
            </h5>
            <div className="space-y-3 text-sm">
              <p className="flex justify-between border-b pb-2">
                <span className="text-slate-500">평가목적</span>
                <span className="font-bold text-slate-800">전문적이고 체계적인 사업 운영 여부 평가</span>
              </p>
              <p className="flex justify-between border-b pb-2">
                <span className="text-slate-500">평가기간</span>
                <span className="font-bold text-indigo-600">2026.01.01 ~ 2028.12.31 (3년간)</span>
              </p>
              <p className="flex justify-between border-b pb-2">
                <span className="text-slate-500">제출조건</span>
                <span className="font-bold text-pink-600">2년 이상 지속 수행 / 법정인력 직접 추진</span>
              </p>
            </div>
          </div>
          <div className="bg-indigo-600 text-white p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg">
            <span className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Evaluation Scale</span>
            <h6 className="text-2xl font-black mb-4 tracking-tighter italic">충실 / 보통 / 보완</h6>
            <p className="text-[11px] leading-relaxed opacity-90">
              세부평가내용의 <strong>모든 항목</strong>을 충족하고 기록이 충실할 때 '충실' 획득 가능
            </p>
          </div>
        </div>
        
        <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-sm">
          <h5 className="font-bold text-indigo-900 mb-4">평가 지표의 3대 핵심축</h5>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                <Target size={24} />
              </div>
              <h6 className="font-bold text-sm mb-1">기획의 전문성</h6>
              <p className="text-[11px] text-slate-500">미션/비전 반영 및 철저한 욕구분석</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mb-3">
                <Briefcase size={24} />
              </div>
              <h6 className="font-bold text-sm mb-1">수행의 적절성</h6>
              <p className="text-[11px] text-slate-500">계획 준수, 전문인력 활용, 자원동원</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-3">
                <TrendingUp size={24} />
              </div>
              <h6 className="font-bold text-sm mb-1">결과 및 성과</h6>
              <p className="text-[11px] text-slate-500">달성도 평가 및 참여자 변화 증명</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "대표사업 기획: 전문성의 시작",
    subtitle: "단순한 활동이 아닌 '목적'이 있는 기획",
    category: "Detail Analysis",
    content: (
      <div className="h-full flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 rounded-r-xl">
              <h6 className="font-bold text-indigo-900 flex items-center gap-2 mb-2">
                <CheckCircle2 size={18} /> 미션과 비전의 연결 (수정)
              </h6>
              <p className="text-xs text-slate-600 leading-relaxed">
                복지관의 미션(장애주민 파트너)과 중장기 전략 방향을 사업계획서 서두에 명시하고, 왜 이 사업이 우리 복지관의 정체성과 맞는지 논리적으로 기술해야 합니다.
              </p>
            </div>
            <div className="bg-slate-50 border-l-4 border-slate-400 p-5 rounded-r-xl">
              <h6 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                <Search size={18} /> 체계적인 욕구 파악
              </h6>
              <ul className="text-[11px] text-slate-500 space-y-1 pl-4 list-disc">
                <li>욕구조사, FGI(초점집단조사), 공청회, 포럼</li>
                <li>2차 자료 분석 (통계청 데이터, 서울시 사회지표)</li>
                <li>전문가 자문(델파이 조사) 등 다양한 방법론 활용</li>
              </ul>
            </div>
          </div>
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h6 className="font-bold text-slate-800 mb-4">사업계획서 필수 기술 항목</h6>
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="p-2 bg-slate-50 rounded border border-slate-100 italic">① 문제 및 욕구, 필요성</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 italic">② 구체화된 목적 및 목표</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 italic">③ 사업 대상 및 인원</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 italic">④ 세부 추진일정 및 내용</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 italic">⑤ 자원확보 방안</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 italic">⑥ 평가방법 및 도구</div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 text-amber-900 rounded-xl text-[10px] leading-relaxed">
              <strong>Tip:</strong> 사업 목표는 SMART(구체적, 측정가능, 달성가능, 결과지향, 시간제한) 원칙에 따라 작성되어야 좋은 평가를 받을 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "사업 수행 및 결과 평가의 적절성",
    subtitle: "과정의 기록과 결과의 환류",
    category: "Detail Analysis",
    content: (
      <div className="grid grid-cols-5 gap-6 h-full">
        <div className="col-span-2 space-y-4">
          <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg">
            <h6 className="font-bold mb-3 flex items-center gap-2 text-indigo-300">
              <FileSearch size={18} /> 수행 과정의 적절성
            </h6>
            <ul className="text-[11px] space-y-3 opacity-90">
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5"></div>
                <span><strong>수행 기록:</strong> 사업 일지, 과정기록지가 사실적이고 구체적으로 관리되고 있는가?</span>
              </li>
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5"></div>
                <span><strong>전문 인력:</strong> 내부 슈퍼비전(월 1회) 및 외부 자문을 활용하고 있는가?</span>
              </li>
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5"></div>
                <span><strong>예산 집행(신규):</strong> 계획에 근거한 예산 투입 및 변경 시 사유서 구비</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-white border rounded-xl flex items-center gap-4">
            <Network className="text-pink-500" />
            <div>
              <p className="font-bold text-xs">자원동원 네트워크</p>
              <p className="text-[10px] text-slate-500">지역사회 인적/물적 자원의 적합한 활용 실적</p>
            </div>
          </div>
        </div>
        
        <div className="col-span-3 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h6 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Share2 size={18} className="text-emerald-600" /> 결과 평가 및 성과 관리
          </h6>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm font-bold text-emerald-600">01</div>
              <div className="flex-1">
                <p className="font-bold text-xs mb-1">다양한 주체의 평가 반영</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">진행자, 자원봉사자, 참여 이용자, 외부 자문 등 다양한 의견을 결과보고서에 수록</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm font-bold text-emerald-600">02</div>
              <div className="flex-1">
                <p className="font-bold text-xs mb-1">환류(Feedback) 시스템</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">평가 결과를 토대로 다음 사업의 수정, 보완, 확대 또는 폐지 여부를 결정한 근거</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm font-bold text-emerald-600">03</div>
              <div className="flex-1">
                <p className="font-bold text-xs mb-1">홍보 및 성과 공유</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">사업보고서 제작, 홈페이지 게시, 참여자 간담회 등을 통한 지역사회 공유</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "변화의 증명: 성과(Outcome) 기술법",
    subtitle: "이용자와 지역사회에 어떤 변화가 있었는가?",
    category: "Detail Analysis",
    content: (
      <div className="h-full flex flex-col gap-6">
        <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-xl">
          <h5 className="text-xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp size={24} className="text-emerald-400" /> 성과 평가 핵심 가이드 (5번 항목)
          </h5>
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-emerald-800 p-5 rounded-2xl border border-emerald-700">
              <h6 className="font-bold text-emerald-300 mb-3 underline underline-offset-4">이용자 및 가족의 변화</h6>
              <ul className="text-xs space-y-2 opacity-90">
                <li>• <strong>일상생활의 변화:</strong> 생활영역 전반의 질적 향상</li>
                <li>• <strong>문제해결:</strong> 서비스 제공 후 당면 과제 해결 정도</li>
                <li>• <strong>역량강화:</strong> 지식, 기술 습득 및 자존감 향상</li>
              </ul>
            </div>
            <div className="bg-emerald-800 p-5 rounded-2xl border border-emerald-700">
              <h6 className="font-bold text-emerald-300 mb-3 underline underline-offset-4">지역사회의 변화</h6>
              <ul className="text-xs space-y-2 opacity-90">
                <li>• <strong>인식의 변화:</strong> 장애인에 대한 지역주민의 시선</li>
                <li>• <strong>정책적 변화:</strong> 새로운 정책 제안 및 제도 보완</li>
                <li>• <strong>영향력 향상:</strong> 권익 옹호 및 정책 실현 기여도</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-emerald-200 bg-emerald-950/50 py-3 rounded-full">
            ※ 이용자, 가족, 지역사회 변화 중 <span className="text-white font-bold underline">1개 이상만 확실히 증명</span>되어도 평가 인정 가능
          </p>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
           <div className="bg-white border-2 border-dashed border-slate-200 p-4 rounded-xl flex items-center gap-3">
              <MessageSquare className="text-indigo-500 flex-shrink-0" />
              <p className="text-[10px] text-slate-500">참여자의 <strong>생생한 인터뷰</strong> 기록 (Before & After)</p>
           </div>
           <div className="bg-white border-2 border-dashed border-slate-200 p-4 rounded-xl flex items-center gap-3">
              <BarChart3 className="text-pink-500 flex-shrink-0" />
              <p className="text-[10px] text-slate-500">표준화된 <strong>척도 검사</strong> (만족도 조사를 넘어선 변화 측정)</p>
           </div>
           <div className="bg-white border-2 border-dashed border-slate-200 p-4 rounded-xl flex items-center gap-3">
              <Target className="text-emerald-500 flex-shrink-0" />
              <p className="text-[10px] text-slate-500">객관적인 <strong>지표 데이터</strong> (참여횟수, 고용률, 자격증 취득 등)</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "평가 지표 구성의 대변화",
    subtitle: "관리지표 축소와 조직/사업 역량 강화",
    category: "Structure",
    content: (
      <div className="grid grid-cols-5 gap-8 items-center h-full">
        <div className="col-span-3 h-80">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <ArrowRightLeft size={20} className="text-indigo-600" /> 지표 개수 및 영역 변경 (2023 vs 2026)
          </h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={changeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="old" name="기존 (2023)" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="new" name="개편 (2026)" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-2 space-y-4">
          <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">30%</div>
              <h5 className="font-bold text-slate-800">관리지표 (8개)</h5>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              회계 투명성 삭제(사전 모니터링 대체), 안전 및 환경관리 유지, 채용 공정성 강화
            </p>
          </div>
          <div className="p-5 bg-pink-50 rounded-2xl border border-pink-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">35%</div>
              <h5 className="font-bold text-slate-800">조직역량지표 (9개)</h5>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              인권증진 영역 신설, 인력 전문성 강화, ESG 경영 지표 도입
            </p>
          </div>
          <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">35%</div>
              <h5 className="font-bold text-slate-800">사업역량지표 (6개)</h5>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              사례관리 체계 통합, 사업 성과 중심 평가, 서울시 정책사업 평가 신설
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "영역 1: 관리지표 (Management)",
    subtitle: "운영의 기초와 안전, 투명성 확보",
    category: "Indicator Detail",
    content: (
      <div className="grid grid-cols-2 gap-6 h-full">
        <div className="space-y-4">
          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <h5 className="font-bold flex items-center gap-2 mb-2">
              <ShieldCheck className="text-blue-600" size={18} /> 1. 안전관리 (ESG)
            </h5>
            <ul className="text-xs text-slate-600 list-disc pl-5 space-y-1">
              <li>이용자/직원 대상 연 1회 안전교육 (내부강사 가능)</li>
              <li>반기별 1회 이상 자체 모의훈련 (상/하반기 각 1회)</li>
              <li>자체 작성 매뉴얼 및 안전관리계획 필수 (2026년~)</li>
            </ul>
          </div>
          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <h5 className="font-bold flex items-center gap-2 mb-2">
              <ClipboardCheck className="text-emerald-600" size={18} /> 2. 직원 채용 공정성 (ESG)
            </h5>
            <ul className="text-xs text-slate-600 list-disc pl-5 space-y-1">
              <li>100% 공개채용 원칙 (게시일자 초일불산입 준수)</li>
              <li>면접 단계 외부위원 참여 필수</li>
              <li>차별 없는 채용조건 명시 (심층 면접 근거 보관)</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <BarChart3 className="text-pink-600" size={18} /> 3. 재정 관리 (성과중심)
          </div>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h5 className="font-bold text-amber-800 text-sm mb-2 flex items-center gap-2">
              <Info size={18} /> 핵심 체크리스트
            </h5>
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              "회계 투명성" 지표는 삭제되었으나, 사회복지시설정보시스템 연동을 통한 '사전평가'로 대체됩니다. 실시간 데이터 관리의 중요성이 더욱 커졌습니다.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "영역 2: 조직역량지표 (Organization)",
    subtitle: "인권, 전문성, 그리고 지역사회 협력",
    category: "Indicator Detail",
    content: (
      <div className="h-full flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-5 bg-slate-900 text-white rounded-2xl">
            <h5 className="font-bold text-pink-400 mb-3 flex items-center gap-2">
              <Heart size={20} /> 인권 증진 (핵심 강화)
            </h5>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-slate-300 mb-1">직원의 인권</p>
                <p className="text-[11px] text-slate-400">직장 내 괴롭힘 예방 규정, 고충처리위원회 활성화 (연 2회 이상 간담회)</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300 mb-1">이용자 인권보장</p>
                <p className="text-[11px] text-slate-400">인권침해 예방 정보제공, 이용자/직원 대상 정기적 인권교육 실시</p>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h5 className="font-bold text-indigo-600 mb-3 flex items-center gap-2">
              <GraduationCap size={20} /> 인력 전문성
            </h5>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>시설장/중간관리자:</strong> 사회복지사 1급, 경력 15년 이상 요건 확인</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>직원교육체계:</strong> 연간 교육계획, 1인당 교육비 20만원 이상 지출 권장</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>슈퍼비전:</strong> 내부 월 1회, 외부 연 2회 이상 정기적 실시</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl">
          <h5 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <ArrowRightLeft size={20} /> 지역사회 변화 대응 및 네트워크 협력 (ESG)
          </h5>
          <div className="grid grid-cols-3 gap-4 text-[11px]">
            <div className="p-3 bg-white rounded-lg border border-emerald-100">
              <p className="font-bold text-emerald-700 mb-1">환경 파악/공유</p>
              지역사회 분석보고서, 정책동향 리포트 활용한 내/외부 공유 실적
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-100">
              <p className="font-bold text-emerald-700 mb-1">시설 운영 반영</p>
              분석된 환경 변화를 중장기/연간 운영계획 및 조직 개편에 실제 반영
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-100">
              <p className="font-bold text-emerald-700 mb-1">공적 네트워크</p>
              다양한 조직(민-민, 민-관)과의 공식 협약 및 실질적 협업 사례
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "우리 복지관의 성과 대응 로드맵",
    subtitle: "5대 사업목표와 평가 지표의 매핑",
    category: "Strategy",
    content: (
      <div className="h-full flex flex-col gap-6">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b">
                <th className="p-3 border-r font-bold text-slate-700">우리 복지관 사업목표</th>
                <th className="p-3 font-bold text-slate-700">관련 평가 지표 (대응 과제)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 border-r font-medium text-slate-800 bg-indigo-50">1. 지역사회 어울리는 복지관</td>
                <td className="p-3 text-slate-600">지역사회 변화 대응, 네트워크 협력 활동, 사업 기획 전문성</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border-r font-medium text-slate-800 bg-indigo-50">2. 이용인 중심 서비스 지원</td>
                <td className="p-3 text-slate-600">이용자 인권보장, 고충처리 프로세스 고도화, 심층 사례관리 실천</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border-r font-medium text-slate-800 bg-indigo-50">3. 신사회적 위험 지원체계</td>
                <td className="p-3 text-slate-600">서울시 정책사업 평가, 지역 내 공식 네트워크 구축 및 협업</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border-r font-medium text-slate-800 bg-indigo-50">4. 지역주민 공간 조성</td>
                <td className="p-3 text-slate-600">주민 참여 주도성 강화, 시설환경관리, ESG 환경보호 실천</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border-r font-medium text-slate-800 bg-indigo-50">5. 꿈꾸는 성장 조직</td>
                <td className="p-3 text-slate-600">직원 교육체계, 직원의 인권, 안전관리 및 근속률 관리</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
            <h5 className="font-bold mb-4 flex items-center gap-2"><Zap className="text-yellow-400" /> 핵심 전략: ESG 실천</h5>
            <div className="space-y-2 text-xs">
              <p>• <strong>E (Environment):</strong> 탄소중립 실천, 친환경 인쇄, 플로깅</p>
              <p>• <strong>S (Social):</strong> 인권 중심 실천, 지역사회 협력, 안전 관리</p>
              <p>• <strong>G (Governance):</strong> 채용 공정성, 회계 투명성(사전 데이터), 리더십</p>
            </div>
          </div>
          <div className="bg-white border-2 border-dashed border-slate-200 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
            <Lightbulb size={32} className="text-amber-500 mb-2" />
            <h5 className="font-bold text-slate-800">지금 바로 준비할 것</h5>
            <p className="text-[11px] text-slate-500">
              "모든 사업의 기록을 '투입'이 아닌 '성과' 관점으로 전환하십시오. 이용자의 변화가 담긴 사진과 인터뷰가 가장 강력한 증거가 됩니다."
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "성공적인 평가를 위한 팀별 액션 플랜",
    subtitle: "2026년 상반기까지의 주요 마일스톤",
    category: "Action Plan",
    content: (
      <div className="h-full flex flex-col justify-center gap-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-slate-50 border rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full flex items-start justify-end p-2 text-indigo-600 font-bold">Q1</div>
            <h6 className="font-bold text-xs mb-2">지표 내재화</h6>
            <p className="text-[10px] text-slate-500">팀별 담당 지표 배정 및 자체 진단 (Gap 분석)</p>
          </div>
          <div className="p-4 bg-slate-50 border rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-pink-100 rounded-bl-full flex items-start justify-end p-2 text-pink-600 font-bold">Q2</div>
            <h6 className="font-bold text-xs mb-2">증빙 고도화</h6>
            <p className="text-[10px] text-slate-500">매뉴얼 정비, 고충처리/회의록 등 정기적 기록 시스템화</p>
          </div>
          <div className="p-4 bg-slate-50 border rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-bl-full flex items-start justify-end p-2 text-emerald-600 font-bold">Q3</div>
            <h6 className="font-bold text-xs mb-2">중간 점검</h6>
            <p className="text-[10px] text-slate-500">모의 평가 실시 및 보완 사항 도출 (피드백 환류)</p>
          </div>
          <div className="p-4 bg-slate-50 border rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full flex items-start justify-end p-2 text-blue-600 font-bold">Q4</div>
            <h6 className="font-bold text-xs mb-2">최종 리허설</h6>
            <p className="text-[10px] text-slate-500">현장 인터뷰 준비 및 사업성과 요약 보고서 완성</p>
          </div>
        </div>
        <div className="p-8 bg-indigo-50 border border-indigo-200 rounded-3xl flex items-center gap-10">
          <div className="flex-1 space-y-4">
            <h5 className="text-xl font-bold text-indigo-900">질문의 힘 (팀별 성찰 질문)</h5>
            <div className="grid grid-cols-2 gap-4 text-xs font-medium text-indigo-800">
              <div className="bg-white p-3 rounded-lg border border-indigo-100">1. 우리 사업의 성과는 무엇인가?</div>
              <div className="bg-white p-3 rounded-lg border border-indigo-100">2. 왜 이 사업을 해야 하는가?</div>
              <div className="bg-white p-3 rounded-lg border border-indigo-100">3. 어떻게 성취할 수 있는가?</div>
              <div className="bg-white p-3 rounded-lg border border-indigo-100">4. 이용자 성장의 증거는 무엇인가?</div>
            </div>
          </div>
          <div className="w-48 text-center bg-indigo-600 text-white p-6 rounded-2xl shadow-xl">
            <MessageSquare size={32} className="mx-auto mb-2" />
            <p className="text-xs">상시 소통 창구<br/><span className="font-bold">평가 대응 TFT</span></p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "함께 행복한 지역사회를 향하여",
    subtitle: "평가는 우리가 걸어온 길을 증명하는 과정입니다.",
    category: "Closing",
    content: (
      <div className="h-full flex flex-col justify-center items-center space-y-12">
        <div className="text-center space-y-4">
          <h4 className="text-3xl font-bold text-slate-800">질의응답 및 의견 수렴</h4>
          <p className="text-slate-500">모든 직원의 목소리가 평가 지표 개선의 시작입니다.</p>
        </div>
        <div className="w-full max-w-2xl h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-500 rounded-full"></div>
        <div className="flex gap-20">
          <div className="text-center">
            <p className="text-4xl font-black text-indigo-600 mb-2">99+</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Welfare Centers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-pink-500 mb-2">23</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Key Indicators</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-emerald-500 mb-2">2026</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Strategic Start</p>
          </div>
        </div>
        <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95">
          발표 자료 다운로드 (PDF)
        </button>
      </div>
    )
  }
];
