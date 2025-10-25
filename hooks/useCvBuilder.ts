'use client';

import { useState } from 'react';
import { CvData, CvLabel, CvSectionItem, defaultCv } from '@/lib/defaultCv';

const createId = () =>
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

export function useCvBuilder(initialData: CvData = defaultCv) {
  const [cv, setCv] = useState<CvData>(initialData);
  const [activeTab, setActiveTab] = useState<'settings' | 'ai-picture' | 'ai-assistant'>('settings');

  const updateTheme = (partial: Partial<CvData['theme']>) => {
    setCv((prev) => ({ ...prev, theme: { ...prev.theme, ...partial } }));
  };

  const updateProfile = (partial: Partial<Pick<CvData, 'name' | 'title' | 'summary' | 'avatar'>>) => {
    setCv((prev) => ({ ...prev, ...partial }));
  };

  const updateLabelList = (key: 'contacts' | 'skills' | 'languages' | 'interests', items: CvLabel[]) => {
    setCv((prev) => ({ ...prev, [key]: items }));
  };

  const updateSectionList = (key: 'experiences' | 'education', items: CvSectionItem[]) => {
    setCv((prev) => ({ ...prev, [key]: items }));
  };

  const updateCustomSections = (customSections: CvData['customSections']) => {
    setCv((prev) => ({ ...prev, customSections }));
  };

  const resetCv = () => setCv(defaultCv);

  const addLabel = (key: 'contacts' | 'skills' | 'languages' | 'interests', value = '') => {
    setCv((prev) => ({
      ...prev,
      [key]: [...prev[key], { id: createId(), label: value }]
    }));
  };

  const addSectionItem = (key: 'experiences' | 'education', value?: Partial<CvSectionItem>) => {
    setCv((prev) => ({
      ...prev,
      [key]: [
        ...prev[key],
        {
          id: createId(),
          title: value?.title ?? 'New entry',
          subtitle: value?.subtitle ?? '',
          period: value?.period ?? '',
          description: value?.description ?? ''
        }
      ]
    }));
  };

  const addCustomSection = () => {
    setCv((prev) => ({
      ...prev,
      customSections: [
        ...prev.customSections,
        {
          id: createId(),
          heading: 'New section',
          items: [{ id: createId(), label: 'List item' }]
        }
      ]
    }));
  };

  const setActive = (tab: 'settings' | 'ai-picture' | 'ai-assistant') => setActiveTab(tab);

  return {
    cv,
    activeTab,
    setActiveTab: setActive,
    updateTheme,
    updateProfile,
    updateLabelList,
    updateSectionList,
    updateCustomSections,
    resetCv,
    addLabel,
    addSectionItem,
    addCustomSection,
    setCv
  };
}
