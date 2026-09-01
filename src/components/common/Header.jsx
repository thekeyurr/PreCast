import { useState } from 'react'
import {
    ArrowRight,
    Building2,
    ChevronDown,
    Globe2,
    LogIn,
    Menu,
    Search,
    X,
} from 'lucide-react'

const navLinks = [
    { label: 'Marketplace', href: '#marketplace', dropdown: true },
    { label: 'Solutions', href: '#solutions', dropdown: true },
    { label: 'Logistics', href: '#logistics' },
    { label: 'Directory', href: '#directory' },
    { label: 'Insights', href: '#insights' },
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="relative z-50 w-full bg-white">
            {/* Top announcement bar - Full Width */}
            <div className="bg-[#07152f] text-white w-full border-b border-white/5">
                <div className="flex min-h-10 w-full items-center justify-between gap-4 px-6 py-2 lg:px-10">
                    <p className="text-[11px] font-medium tracking-wide text-slate-300 sm:text-xs">
                        The digital marketplace built for the precast industry
                    </p>

                    <div className="flex shrink-0 items-center gap-6">
                        <button className="hidden items-center gap-1.5 text-xs font-medium text-slate-300 transition hover:text-white sm:flex">
                            <Globe2 size={13} />
                            United States
                            <ChevronDown size={12} />
                        </button>
                        <span className="hidden h-4 w-px bg-white/20 sm:block" />
                        <a href="#network" className="flex items-center gap-1 text-[11px] font-semibold text-[#65a8ff] transition hover:text-white sm:text-xs">
                            2,450+ verified members
                            <ArrowRight size={13} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navigation - Full Width */}
            <div className="border-b border-slate-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="flex h-20 w-full items-center gap-8 px-6 lg:px-10">

                    {/* Logo Section */}
                    <a href="/" className="flex shrink-0 items-center gap-3">
                        <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#0b1f44] text-white shadow-lg">
                            <Building2 size={24} />
                            <span className="absolute bottom-0 left-0 h-1 w-full bg-[#2878ff]" />
                        </div>
                        <div className="leading-none">
                            <div className="flex items-center gap-1">
                                <span className="text-2xl font-black tracking-tighter text-[#07152f]">PRE</span>
                                <span className="text-2xl font-black tracking-tighter text-[#2878ff]">CAST</span>
                            </div>
                            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">EXCHANGE NETWORK</span>
                        </div>
                    </a>

                    {/* Nav Links - Desktop */}
                    <nav className="hidden items-center gap-2 xl:flex">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold transition ${index === 0 ? 'bg-blue-50 text-[#1769e0]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#07152f]'
                                    }`}
                            >
                                {link.label}
                                {link.dropdown && <ChevronDown size={14} />}
                            </a>
                        ))}
                    </nav>

                    {/* Search Bar - Grows to fill space */}
                    <form className="hidden min-w-[200px] flex-1 items-center lg:flex max-w-xl mx-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative w-full group">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2878ff]" />
                            <input
                                type="search"
                                placeholder="Search equipment, molds, assets..."
                                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none transition focus:border-[#2878ff] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>
                    </form>

                    {/* Right Side Actions */}
                    <div className="ml-auto flex items-center gap-3 shrink-0">
                        <button className="hidden md:flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-bold text-slate-700 hover:bg-slate-100 transition">
                            <LogIn size={18} />
                            Login
                        </button>
                        <button className="h-12 flex items-center gap-2 rounded-xl bg-[#2878ff] px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-[#1769e0] transition transform hover:-translate-y-0.5">
                            List an asset
                            <ArrowRight size={16} />
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="xl:hidden grid h-12 w-12 place-items-center rounded-xl border border-slate-200"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav - Also Full Width */}
                <div className={`xl:hidden overflow-hidden transition-all duration-300 bg-white ${isMenuOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
                    <div className="px-6 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="block text-lg font-bold text-slate-800 py-2 border-b border-slate-50">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header