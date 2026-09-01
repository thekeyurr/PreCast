import React from 'react';
import { FileText, Map, Cuboid, BookOpen, ChevronRight } from 'lucide-react';

const RightSidebar = () => {
    const menuItems = [
        { name: 'Appraisals', icon: <FileText size={18} /> },
        { name: 'Blueprints', icon: <Map size={18} /> },
        { name: 'Castings', icon: <Cuboid size={18} /> },
        { name: 'Directory', icon: <BookOpen size={18} /> },
        { name: 'Events', icon: <BookOpen size={18} /> },
        { name: 'Exchange', icon: <BookOpen size={18} /> },
        { name: 'Forms', icon: <BookOpen size={18} /> },

    ];

    return (
        <div className="absolute right-6 top-1/4 z-20 flex flex-col gap-2">
            {menuItems.map((item, index) => (
                <div key={index}
                    className="group flex items-center justify-between w-48 bg-white/10 backdrop-blur-md border border-white/20 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-white hover:text-primary transition-all duration-300 shadow-lg bg-blue-50 hover:text-black">
                    <div className="flex items-center gap-3 font-medium text-sm hover:text-black">
                        {item.icon}
                        {item.name}
                    </div>
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            ))}

            {/* View All Button */}
            <div className="text-center mt-2 text-white/70 text-xs font-semibold cursor-pointer hover:text-white transition-colors">
                View All 24 Categories +
            </div>
        </div>
    );
};

export default RightSidebar;