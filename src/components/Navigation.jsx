import React from "react";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <p className="font-bold text-xl tracking-tight text-slate-900">
              안녕
            </p>
            <p>hi</p>
          </div>
          <nav className="flex">
            <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <li className="hover:text-blue-600 transition">홈</li>
              <li className="hover:text-blue-600 transition">안녕</li>
              <li className="hover:text-blue-600 transition">블라블라</li>
              <li className="hover:text-blue-600 transition">하하하</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
