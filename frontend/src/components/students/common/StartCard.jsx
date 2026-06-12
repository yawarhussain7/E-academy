import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function StatCard({ title, value, unit }) {
  return (
    <div className="group relative flex min-h-24 min-w-0 flex-col justify-between rounded-lg border border-gray-800/40 bg-[#13151a] p-4 transition-all duration-300 hover:border-gray-700/50">
      <div className="mb-2 flex items-start justify-between gap-3">
        <span className="truncate text-xs font-medium uppercase tracking-wider text-gray-500">{title}</span>
        <ChevronRight className="h-4 w-4 shrink-0 cursor-pointer text-gray-600 transition-colors group-hover:text-purple-400" />
      </div>
      <div className="flex min-w-0 items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight text-white">{value}</span>
        <span className="truncate text-xs font-medium text-gray-500">{unit}</span>
      </div>
    </div>
  );
}
