import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Globe,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { label: "Overview", path: "/student/dashboard" },
        { label: "My Courses", path: "/student/courses" },
        { label: "Assignments", path: "/student/assignments" },
        { label: "Exams", path: "/student/exams" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", path: "/docs" },
        { label: "Help Center", path: "/help" },
        { label: "System Status", path: "/status" },
        { label: "API Reference", path: "/api" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers", badge: "Hiring" },
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-gray-800/40 bg-[#090a0f]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-8 border-b border-gray-800/40 pb-8 md:grid-cols-2 lg:grid-cols-12">

          {/* BRAND */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                E
              </div>
              <span className="text-sm font-bold tracking-wider text-white uppercase">
                Academy
              </span>
            </Link>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              A smart learning platform for students to track progress, manage
              courses, and improve skills efficiently.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="p-2 bg-[#13151a] border border-gray-800/40 rounded-xl text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition cursor-pointer">
                <Globe className="w-4 h-4" />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="p-2 bg-[#13151a] border border-gray-800/40 rounded-xl text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition cursor-pointer">
                <BriefcaseBusiness className="w-4 h-4" />
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="p-2 bg-[#13151a] border border-gray-800/40 rounded-xl text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition cursor-pointer">
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-5 gap-6">
            {footerLinks.map((group, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">
                  {group.title}
                </h4>

                <ul className="space-y-2">
                  {group.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.path}
                        className="text-xs text-gray-500 hover:text-gray-300 transition flex items-center gap-2 cursor-pointer"
                      >
                        {link.label}

                        {link.badge && (
                          <span className="text-[8px] px-1.5 py-0.5 rounded-md bg-purple-600/10 text-purple-400 border border-purple-500/20 uppercase font-bold">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">
              Stay Updated
            </h4>

            <p className="text-xs text-gray-500">
              Get updates about new courses and platform features.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-[#13151a] border border-gray-800 rounded-xl py-2.5 pl-3 pr-10 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500"
                />

                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 bg-purple-600 hover:bg-purple-700 rounded-lg text-white cursor-pointer"
                >
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-[11px] text-gray-600 sm:flex-row sm:text-left">
          <p>&copy; {currentYear} Academy. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-purple-500 fill-current" />
            using React + Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}
