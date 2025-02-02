"use client";
import React from "react";
import Link from "next/link";
import { Leaf, Home, History, User, LogIn } from "lucide-react";
import { useRouter } from "next/router";
const Nav = () => {
  const location = useRouter;
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-xl font-semibold text-green-800">
                  EcoRate
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/Landing"
                className={`nav-link ${
                  location.pathname === "/" ? "text-green-600" : "text-gray-600"
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>

              <Link
                href="/Signin"
                className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
