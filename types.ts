
import React from 'react';

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  content: React.ReactNode;
}

export enum EvaluationArea {
  Management = '관리지표',
  Organization = '조직역량',
  Project = '사업역량'
}