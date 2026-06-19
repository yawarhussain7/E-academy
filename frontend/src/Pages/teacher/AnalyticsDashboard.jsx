import React from 'react';
import Sidebar from '../../components/teacher/Slider'
import Header from '../../components/teacher/Header';
import StatCard from '../../components/teacher/dashboard/StatCard'
import PerformanceChart from '../../components/teacher/analytic/PerformanceChart';
import MetricRow from '../../components/teacher/analytic/MetricRow';
import { Award, Zap, BrainCircuit, ShieldAlert, Download, RefreshCw } from 'lucide-react';

const AnalyticsDashboard = () => {
  // Chart Dataset Mocking
  const classPerformanceData = [
    { label: 'Math 9B', score: 72 },
    { label: 'Math 10A', score: 84 },
    { label: 'Math 11C', score: 68 },
    { label: 'Math 12 AP', score: 91 },
    { label: 'Algebra Q3', score: 76 },
    { label: 'Geometry WS', score: 80 },
  ];

  return (
    <div className="min-h-screen bg-[#0d0b0e] text-gray-300 font-sans antialiased">
      <Sidebar currentTab="Settings" /> {/* Active tracker updates wrapper */}
      <Header />

      <main className="pl-64 pt-20 min-h-screen">
        <div className="max-w-[1600px] mx-auto p-8 space-y-8">
          
          {/* Action Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Performance Analytics</h1>
              <p className="text-sm text-gray-400 mt-1">
                Real-time cohort insights, automated validation failure flags, and historical scoring distributions.
              </p>
            </div>

            {/* Utility Control Cluster */}
            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-[#120f14] border border-[#1a161d] hover:border-[#2d2236] text-gray-400 hover:text-gray-200 rounded-xl transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1221] border border-[#3b1d4a] text-purple-400 hover:bg-[#25182c] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-200">
                <Download className="w-4 h-4" />
                Export CSV Report
              </button>
            </div>
          </div>

          {/* Analytical Focus High-Tier Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <StatCard title="Highest Cohort Score" value="94.2%" subtext="Math 12 AP Section" icon={Award} colorClass="text-purple-400" />
            <StatCard title="AI Precision Rate" value="98.4%" subtext="0.4% flag override requests" icon={BrainCircuit} colorClass="text-purple-400" />
            <StatCard title="Evaluation Velocity" value="2.4m" subtext="Avg. time per automated run" icon={Zap} colorClass="text-purple-400" />
            <StatCard title="Critical Flag Alerts" value="6 Run Errors" subtext="Requires manual override" icon={ShieldAlert} colorClass="text-red-400" />
          </div>

          {/* Core Analytics Grid Split */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            
            {/* Performance Visual Chart Row (8 Cols) */}
            <div className="xl:col-span-8">
              <PerformanceChart data={classPerformanceData} />
            </div>

            {/* Pipeline Quality Diagnostics (4 Cols) */}
            <div className="xl:col-span-4 bg-[#120f14] border border-[#1a161d] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Validation Pipeline Health
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Distribution of automated feedback parameters flagged across submissions.
                </p>

                <div className="mt-2">
                  <MetricRow title="WCAG Accessibility Mismatch" status="Contrast / Navigation" count="24" colorClass="bg-purple-500" />
                  <MetricRow title="Logic Loop Fallback Breaks" status="Flow Error Branches" count="12" colorClass="bg-amber-500" />
                  <MetricRow title="Missing Destructive State Confirmation" status="System Deletion Rules" count="8" colorClass="bg-red-500" />
                  <MetricRow title="Fully Compliant / Passing" status="Zero System Flags" count="114" colorClass="bg-emerald-500" />
                </div>
              </div>

              {/* Action insight summary text block footer */}
              <div className="mt-6 pt-4 border-t border-[#1a161d] text-xs text-gray-500 leading-relaxed">
                💡 <span className="text-gray-400 font-medium">Instruction Insight:</span> Over 60% of current cohort weaknesses stem from <span className="text-purple-400">WCAG AA Element Navigation states</span>. Consider adding a quick structural refresher to your next live class session.
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;