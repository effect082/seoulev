
import React from 'react';
import { evaluationSlides } from '../constants';

interface Props {
  slideIndex: number;
}

const SlideContent: React.FC<Props> = ({ slideIndex }) => {
  const slide = evaluationSlides[slideIndex];

  if (!slide) return <div className="p-20 text-center">Slide not found</div>;

  return (
    <div className="flex-1 flex flex-col p-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
          {slide.category}
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-xl text-slate-500 font-medium">{slide.subtitle}</p>
        )}
      </div>
      <div className="flex-1">
        {slide.content}
      </div>
    </div>
  );
};

export default SlideContent;
