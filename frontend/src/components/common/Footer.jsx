import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#07060D] pt-16 pb-12 border-t border-white/5 text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">Ω</div>
              <span className="font-bold text-white text-base">EduSphere</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              Architecting state of the art learning management software designed for maximum knowledge retention.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Security APIs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing Matrix</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Engineering Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} EduSphere Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}