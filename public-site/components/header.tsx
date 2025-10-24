"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Designs", href: "/designs" },
  { name: "Blog", href: "/blog" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-2 md:px-6 animate-fade-in">
      <nav
        className={`max-w-full mx-auto ${
          mobileMenuOpen ? "rounded-2xl" : "rounded-2xl"
        } transition-all duration-300 border backdrop-blur-2xl shadow-lg 
        ${
          isDark
            ? "bg-white/10 border-white/10 text-white shadow-black/50"
            : "bg-white/40 border-white/60 text-black shadow-black/10"
        } 
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo.jpg"
              alt="Sagaljet Logo"
              width={60}
              height={70}
              className="rounded-2xl ring-2 ring-white/10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                  pathname === item.href
                    ? "text-blue-500 font-semibold"
                    : isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {pathname === item.href && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-white/20 to-blue-500/20 rounded-full blur-xl" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <div
                className={`transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t px-4 py-4 animate-slide-down rounded-b-3xl backdrop-blur-2xl transition-all duration-300 ${
              isDark
                ? "bg-white/10 border-white/10 text-white"
                : "bg-white/60 border-white/50 text-black"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] ${
                    pathname === item.href
                      ? "bg-blue-500/20 text-blue-400"
                      : isDark
                      ? "text-gray-300 hover:bg-white/10"
                      : "text-gray-700 hover:bg-black/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
