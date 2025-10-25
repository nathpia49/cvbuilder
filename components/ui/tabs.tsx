"use client";

import { Fragment, useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";

export type TabItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  description?: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
};

export function Tabs({ tabs, defaultTabId, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId ?? tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabClick(tab.id)}
            className={clsx(
              "flex flex-col gap-1 rounded-2xl border px-4 py-3 text-left transition md:flex-row md:items-center",
              activeTab === tab.id
                ? "border-primary/60 bg-primary/10 text-primary-foreground shadow-glow"
                : "border-white/10 bg-white/5 text-slate-200 hover:border-primary/40 hover:bg-primary/10",
            )}
          >
            <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
              {tab.icon}
              {tab.label}
            </span>
            {tab.description ? (
              <span className="text-xs text-slate-400 md:ml-3 md:text-sm">
                {tab.description}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <div className="grow">
        <Fragment key={currentTab?.id}>{currentTab?.content}</Fragment>
      </div>
    </div>
  );
}
