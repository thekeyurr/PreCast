import React, { useRef, useState, useCallback } from "react";
import {
    ArrowRight,
    PackagePlus,
    RefreshCcw,
    Wrench,
    Repeat,
    Boxes,
    Leaf,
} from "lucide-react";

const BLUE = "#004aad";

const CARDS = [
    {
        tag: "PROCUREMENT",
        title: "New Molds & Forms",
        desc: "Deploy precision-engineered modern wetcast profiles, deep structural steel jackets, and high-tolerance modular infrastructure castings built for heavy automation.",
        cta: "Browse factory catalog",
        Icon: PackagePlus,
    },
    {
        tag: "SECONDARY MARKET",
        title: "Pre-Owned Assets",
        desc: "Sourcing verified pre-owned casting inventories. Acquire structurally integral, factory-inspected steel molds and casting tables at optimized cost tiers.",
        cta: "Inspect secondary ledger",
        Icon: RefreshCcw,
    },
    {
        tag: "REFURBISHMENT",
        title: "Maintenance & Repairs",
        desc: "Connect with certified fabrication specialists to machine, clean, repair, and recalibrate worn steel formwork back to original structural spec limits.",
        cta: "Schedule engineering audit",
        Icon: Wrench,
    },
    {
        tag: "LIQUIDITY EXCHANGE",
        title: "Asset Trade Portal",
        desc: "Direct asset-for-asset trading infrastructure. Swap unutilized steel panels, box culvert configurations, or trench systems for active project formwork templates.",
        cta: "Initiate trade inquiry",
        Icon: Repeat,
    },
    {
        tag: "OVERSTOCK LIQUIDATION",
        title: "Surplus Inventory",
        desc: "Immediate acquisition of liquidated manufacturer overstock. Zero-lead-time structural form assemblies available directly for immediate shipment pipelines.",
        cta: "Acquire liquidation lots",
        Icon: Boxes,
    },
    {
        tag: "SUSTAINABILITY LOOP",
        title: "Material Donate Path",
        desc: "Route decommissioned casting frames, overstock mix materials, or retired rebar arrays directly into secondary educational recycling pipelines.",
        cta: "Route donation package",
        Icon: Leaf,
    },
];

function CardVisual({ Icon }) {
    return (
        <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden bg-[#f5f6f8]">
            {/* stylized mold silhouette, echoes the reference renders without copying them */}
            <svg
                viewBox="0 0 120 90"
                className="absolute h-[150px] w-[150px] opacity-90 transition-transform duration-300 group-hover:scale-105"
            >
                <polygon points="20,86 45,30 60,55 75,30 100,86" fill={BLUE} opacity="0.14" />
                <polygon points="30,86 46,40 60,62 74,40 90,86" fill={BLUE} opacity="0.28" />
                <rect x="46" y="14" width="28" height="28" fill="#c9ccd1" />
            </svg>
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white transition-colors duration-300 group-hover:bg-white" style={{ borderColor: BLUE }}>
                <Icon size={26} color={BLUE} strokeWidth={1.75} />
            </div>
        </div>
    );
}

function ProductCard({ card }) {
    const { tag, title, desc, cta, Icon } = card;
    return (
        <div
            className="group flex h-[560px] w-[290px] flex-shrink-0 flex-col justify-between border-2 bg-white transition-colors duration-300 hover:bg-[#004aad]"
            style={{ borderColor: BLUE }}
        >
            <CardVisual Icon={Icon} />

            <div className="flex flex-1 flex-col gap-3 px-6 pt-6">
                <span
                    className="w-fit border px-2 py-1 text-[11px] font-semibold tracking-wide text-[#004aad] transition-colors duration-300 group-hover:border-white group-hover:text-white"
                    style={{ borderColor: BLUE }}
                >
                    {tag}
                </span>
                <h3 className="text-lg font-bold leading-snug text-[#0b1d3a] transition-colors duration-300 group-hover:text-white">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4a5568] transition-colors duration-300 group-hover:text-[#dbe6f7]">
                    {desc}
                </p>
            </div>

            <div className="p-6 pt-4">
                <button
                    className="w-full text-white text-[10px] font-black uppercase tracking-widest py-4 px-4 flex items-center justify-center gap-2 transition-colors rounded-none bg-[#004aad] group-hover:bg-white group-hover:text-[#004aad]"
                    type="button"
                >
                    {cta.toUpperCase()}
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}

export default function ProductGrid() {
    const trackRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const el = trackRef.current;
        console.log('el====', el);
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        console.log('max====', max);

        setProgress(max > 0 ? el.scrollLeft / max : 0);
    }, []);

    const scrollByCards = (dir) => {
        const el = trackRef.current;
        console.log('el====', el);

        if (!el) return;
        el.scrollBy({ left: dir * 310, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-white py-14">
            <div
                ref={trackRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto px-10 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
                {CARDS.map((card) => (
                    <ProductCard key={card.title} card={card} />
                ))}
            </div>

            {/* custom scroll indicator, mirrors the thin blue progress rail in the brief */}
            <div className="mx-10 mt-6 flex items-center gap-3">
                <button
                    onClick={() => scrollByCards(-1)}
                    aria-label="Scroll left"
                    className="text-[#004aad] transition-opacity hover:opacity-60"
                >
                    ‹
                </button>
                <div className="relative h-[3px] flex-1 bg-[#e3e8f2]">
                    <div
                        className="absolute top-1/2 h-[3px] w-1/3 -translate-y-1/2 bg-[#004aad]"
                        style={{ left: `${progress * (100 - 33)}%` }}
                    />
                </div>
                <button
                    onClick={() => scrollByCards(1)}
                    aria-label="Scroll right"
                    className="text-[#004aad] transition-opacity hover:opacity-60"
                >
                    ›
                </button>
            </div>
        </section>
    );
}