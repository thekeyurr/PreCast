import React from 'react';

const Sponsors = () => {
    const partners = [
        "STEEL WORKS", "FLORIDA PRECAST", "CMHA", "CCPA",
        "ACPA", "NJ PRECAST", "TEXAS PIPES", "CONCRETE CO", "PRECAST"
    ];

    return (
        <div className="w-full bg-slate-50 border-b border-slate-200 overflow-hidden">
            <div className="flex items-center w-full">
                {/* Fixed Label */}
                <div className="bg-white px-6 py-3 font-black text-[11px] tracking-widest text-slate-400 border-r border-slate-200 shrink-0 uppercase z-10">
                    Proudly Supporting & Sponsoring
                </div>

                {/* Marquee Wrapper */}
                <div className="flex-1 overflow-hidden relative py-3">
                    <div className="flex animate-scroll whitespace-nowrap gap-16 items-center">
                        {[...partners, ...partners, ...partners].map((brandpartner, index) => (
                            <span key={index} className="text-sm font-bold text-slate-400 hover:text-blue-600 cursor-pointer transition-colors">
                                {brandpartner}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;