import React from 'react';
import Sidebar from '../../components/students/Slidebar'
import Header from '../../components/students/Header';
import StatCard from '../../components/students/StartCard'
import CourseOverviewChart from '../../components/students/CourseOverviewChart';
import PerformanceSummary from '../../components/students/PerformanceSummary';
import CourseProgressList from '../../components/students/CourseProgressList';
import UpcomingLessons from '../../components/students/UpcomingLessons';
import Footer from '../../components/common/Footer';

export default function StudentDashboard() {
  const userData = {
    name: "Sadia Hossain Mim",
    handle: "@sadiahossainmim",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  };

  return (
    <div className="flex h-dvh overflow-auto bg-[#0d0e12] text-gray-300 font-sans antialiased">
      <Sidebar />

      <main className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="mx-auto flex min-h-full w-full max-w-360 flex-col px-4 py-3 sm:px-5 lg:px-6">
          <Header user={userData} />

          <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Active Courses" value="6" unit="ongoing" />
            <StatCard title="Completed Courses" value="12" unit="finished" />
            <StatCard title="Overall Progress" value="68%" unit="completed" />
            <StatCard title="Total Enrolled" value="18" unit="courses" />
          </section>

          <section className="mt-4 grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-12">
            <div className="min-w-0 rounded-lg border border-gray-800/40 bg-[#13151a] p-4 lg:p-5 xl:col-span-7">
              <CourseOverviewChart />
            </div>
            <div className="min-w-0 rounded-lg border border-gray-800/40 bg-[#13151a] p-4 lg:p-5 xl:col-span-5">
              <PerformanceSummary />
            </div>
          </section>

          <section className="mt-4 grid min-w-0 grid-cols-1 gap-4 pb-4 xl:grid-cols-12">
            <div className="min-w-0 rounded-lg border border-gray-800/40 bg-[#13151a] p-4 lg:p-5 xl:col-span-8">
              <CourseProgressList />
            </div>
            <div className="min-w-0 rounded-lg border border-gray-800/40 bg-[#13151a] p-4 lg:p-5 xl:col-span-4">
              <UpcomingLessons />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
