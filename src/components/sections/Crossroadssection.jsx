import React, { useRef, useState, useCallback } from "react";
import { ArrowRight, Upload, HelpCircle, Heart } from "lucide-react";

const BLUE = "#004aad";

const CARDS = [
    {
        eyebrow: "VENDOR DASHBOARD",
        title: "Post An Asset",
        desc: "List your concrete molds, cement mixes, drainage pipes, and other precast inventory directly on our marketplace.",
        link: "Reveal terminal specs",
        Icon: Upload,
        back: {
            heading: "Post An Asset Details",
            desc: "Connect with buyers looking for high-quality precast materials. Add photos, dimensions, and pricing to turn your idle concrete products into active sales.",
            cta: "Post a listing",
        },
    },
    {
        eyebrow: "CUSTOM ORDERS",
        title: "Request A Fabrication",
        desc: "Need a specific concrete mold or specialized drainage solution? Request custom precast products from our verified fabricators.",
        link: "Reveal terminal specs",
        Icon: HelpCircle,
        back: {
            heading: "Fabrication Request Details",
            desc: "Submit your specs and let verified fabricators bid on the job. Track quotes, lead times, and material certs in one thread before you commit.",
            cta: "Start a request",
        },
    },
    {
        eyebrow: "SUSTAINABILITY",
        title: "Donate Surplus",
        desc: "Have leftover cement, unused forms, or excess drainage pipes? Donate your surplus precast materials to local projects.",
        link: "Reveal terminal specs",
        Icon: Heart,
        back: {
            heading: "Surplus Donation Details",
            desc: "Match unused inventory to local infrastructure projects and community builds. Get a donation receipt and impact record for every pallet routed.",
            cta: "Start a donation",
        },
    },
];

const CARDS2 = [
    {
        eyebrow: "VENDOR DASHBOARD",
        title: "Post An Asset",
        desc: "List your concrete molds, cement mixes, drainage pipes, and other precast inventory directly on our marketplace.",
        link: "Reveal terminal specs",
        Icon: Upload,
        back: {
            heading: "Post An Asset Details",
            desc: "Connect with buyers looking for high-quality precast materials. Add photos, dimensions, and pricing to turn your idle concrete products into active sales.",
            cta: "Post a listing",
        },
    },
    {
        eyebrow: "CUSTOM ORDERS",
        title: "Request A Fabrication",
        desc: "Need a specific concrete mold or specialized drainage solution? Request custom precast products from our verified fabricators.",
        link: "Reveal terminal specs",
        Icon: HelpCircle,
        back: {
            heading: "Fabrication Request Details",
            desc: "Submit your specs and let verified fabricators bid on the job. Track quotes, lead times, and material certs in one thread before you commit.",
            cta: "Start a request",
        },
    },
    {
        eyebrow: "SUSTAINABILITY",
        title: "Donate Surplus",
        desc: "Have leftover cement, unused forms, or excess drainage pipes? Donate your surplus precast materials to local projects.",
        link: "Reveal terminal specs",
        Icon: Heart,
        back: {
            heading: "Surplus Donation Details",
            desc: "Match unused inventory to local infrastructure projects and community builds. Get a donation receipt and impact record for every pallet routed.",
            cta: "Start a donation",
        },
    },
];

console.log('CARDS2===', CARDS2);

function FlipCard({ card }) {
    const { eyebrow, title, desc, link, Icon, back } = card;
    return (
        <div
            className="group relative h-[330px] w-full overflow-hidden border-2 bg-white"
            style={{ borderColor: BLUE }}
        >
            {/* front face */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:opacity-0">
                <div>
                    <div
                        className="mb-5 flex h-12 w-12 items-center justify-center border"
                        style={{ borderColor: "#dbe3f3" }}
                    >
                        <Icon size={20} color={BLUE} strokeWidth={1.75} />
                    </div>
                    <p className="mb-1 text-[11px] font-semibold tracking-wide" style={{ color: BLUE }}>
                        {eyebrow}
                    </p>
                    <h3 className="text-xl font-extrabold text-[#0b1d3a]">{title}</h3>
                </div>
                <div>
                    <p className="mb-5 text-sm leading-relaxed text-[#5a6b8c]">{desc}</p>
                    <div className="h-px w-full bg-[#e3e8f2]" />
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold tracking-wide" style={{ color: BLUE }}>
                        {link.toUpperCase()}
                        <ArrowRight size={14} />
                    </div>
                </div>
            </div>

            <div
                className="absolute inset-0 flex translate-y-full flex-col justify-between p-8 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                style={{ backgroundColor: BLUE }}
            >
                <div>
                    <p className="mb-4 text-[11px] font-semibold tracking-wide text-[#bcd0f5]">
                        {back.heading.toUpperCase()}
                    </p>
                    <p className="text-sm leading-relaxed text-[#dbe6f7]">{back.desc}</p>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-white px-4 py-3 text-xs font-bold tracking-wide"
                    style={{ color: BLUE }}
                >
                    {back.cta.toUpperCase()}
                    <ArrowRight size={14} />
                </button>
            </div>
        </div>
    );
}

export default function CrossroadsSection() {
    const trackRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setProgress(max > 0 ? el.scrollLeft / max : 0);
    }, []);

    return (
        <section className="w-full bg-white py-14">
            {/* top scroll rail, matches the ledger-style progress indicator */}
            <div className="mx-10 mb-10 flex items-center gap-3">
                <span className="text-[#004aad]">‹</span>
                <div className="relative h-[3px] flex-1 bg-[#e3e8f2]">
                    <div
                        className="absolute top-1/2 h-[3px] w-2/3 -translate-y-1/2 bg-[#004aad]"
                        style={{ left: `${progress * (100 - 66)}%` }}
                    />
                </div>
                <span className="text-[#004aad]">›</span>
            </div>

            <div
                ref={trackRef}
                onScroll={handleScroll}
                className="grid grid-cols-1 gap-6 px-10 sm:grid-cols-2 lg:grid-cols-3"
            >
                {CARDS.map((card) => (
                    <FlipCard key={card.title} card={card} />
                ))}
            </div>

            <div className="mt-16 flex flex-col items-center px-6 text-center">
                <span className="mb-6 border border-[#dbe3f3] bg-[#f5f7fb] px-4 py-2 text-[11px] font-semibold tracking-wide text-[#0b1d3a]">
                    INDUSTRIAL TRADING ARCHITECTURE
                </span>
                <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-[#0b1d3a] sm:text-5xl">
                    The crossroads of everything <span style={{ color: "#4f7fe0" }}>precast</span>
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#5a6b8c]">
                    Every pipeline converging in one environment. Hover or select an operational target path to interact with the global ledger ecosystem.
                </p>
            </div>
        </section>
    );
}