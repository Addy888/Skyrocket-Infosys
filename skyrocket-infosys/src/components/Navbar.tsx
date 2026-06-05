import Link from "next/link";
import { Rocket, Menu, X } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                SkyRocket <span className="text-primary-600">Infosys</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Testimonials
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="#contact" 
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button (Mock) */}
          <div className="flex md:hidden items-center">
            <button className="text-slate-600 hover:text-slate-900">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
