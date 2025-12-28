import React from "react";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white/80 backdrop-blur-md border-b border-indigo-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <p>안녕</p>
            <p>hi</p>
          </div>
          <nav className="flex">
            <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
