import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Link, Eye, Edit3, Plus, HelpCircle } from 'lucide-react';

const ModuleCard = ({ moduleNumber, title, status, items }) => {
  const [isOpen, setIsOpen] = useState(moduleNumber === 1); // Open the first module by default

  return (
    <div className="bg-[#120f14] border border-[#1a161d] rounded-2xl overflow-hidden transition-all duration-200">
      
      {/* Module Header Row */}
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-5 flex items-center justify-between cursor-pointer bg-[#151117] hover:bg-[#1c1622] transition-colors select-none"
      >
        <div className="flex items-center gap-4">
          <div className="text-xs font-bold font-mono text-purple-400 bg-[#1c1221] border border-[#3b1d4a] px-2.5 py-1 rounded-lg">
            MOD {moduleNumber}
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">{title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{items.length} instructional materials listed</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase border ${
            status === 'Published' 
              ? 'bg-[#111c14] border-[#1e3d25] text-emerald-400' 
              : 'bg-[#1c1913] border-[#3d2f1d] text-amber-400'
          }`}>
            {status}
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </div>
      </div>

      {/* Expandable Module Content Item List */}
      {isOpen && (
        <div className="divide-y divide-[#1a161d] bg-[#120f14] px-5">
          {items.map((item, idx) => {
            return (
              <div key={idx} className="py-4 flex flex-wrap items-center justify-between gap-4 group">
                <div className="flex items-start gap-3.5 max-w-[70%]">
                  <div className="p-2 bg-[#0d0b0e] border border-[#1a161d] text-purple-400 rounded-lg mt-0.5 shrink-0">
                    {item.type === 'assignment' && <FileText className="w-4 h-4" />}
                    {item.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                    {item.type === 'resource' && <Link className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 tracking-wide group-hover:text-purple-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>

                {/* Content Hover Action Tools */}
                <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-[#0d0b0e] border border-[#1a161d] hover:border-purple-500/50 text-gray-400 hover:text-white rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-[#0d0b0e] border border-[#1a161d] hover:border-purple-500/50 text-gray-400 hover:text-white rounded-lg transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
          
          {/* Quick Item Addition Placeholder Trigger inside Module */}
          <div className="py-3 flex justify-center">
            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-purple-400 transition-colors py-1 px-3 rounded-lg hover:bg-[#151117]">
              <Plus className="w-3.5 h-3.5" />
              Add Content Item to Module
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ModuleCard;