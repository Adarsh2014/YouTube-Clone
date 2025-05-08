// import React from "react";
// import { useSelector } from "react-redux";

// const Sidebar = () => {
//     const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//     if (!isMenuOpen) return null;
//     return (
//         <div className="p-5 shadow-lg w-48 px-4">
//             <ul className="space-y-2">
//                 <li>🏚️ Home</li>
//                 <li>🏚️ Music</li>
//                 <li>🎬 Shorts</li>
//                 <li>🎥 Subscription</li>
//             </ul>
//             <div className="my-4 border-b border-gray-300" />

//             <h1 className="font-bold pt-5 pb-3">You</h1>
//             <ul className="space-y-2">
//                 <li>🔎 History</li>
//                 <li>🔎 Playlist</li>
//                 <li>🔎 Your videos</li>
//                 <li>🔎 Your courses</li>
//                 <li>🔎 Watch Later</li>
//                 <li>🔎 Liked video</li>
//                 <li>🔎 Downloaded</li>
//             </ul>
//             <div className="my-4 border-b border-gray-300" />

//             <h1 className="font-bold pt-5 pb-3">Subsciptions</h1>
//             <ul className="space-y-2">
//                 <li>🔎 Music</li>
//                 <li>🔎 Sports</li>
//                 <li>🔎 Gaming</li>
//                 <li>🔎 Movies</li>
//             </ul>
//             <div className="my-4 border-b border-gray-300" />

//             <h1 className="font-bold pt-5 pb-3">Explore</h1>
//             <ul className="space-y-2">
//                 <li>🔎 Trending</li>
//                 <li>🔎 Shoping</li>
//                 <li>🔎 Music</li>
//                 <li>🔎 Film</li>
//                 <li>🔎 Live</li>
//                 <li>🔎 Gaming</li>
//                 <li>🔎 News</li>
//             </ul>
//             <div className="my-4 border-b border-gray-300" />

//             <h1 className="font-bold pt-5 pb-3">More From YouTube</h1>
//             <ul className="space-y-2">
//                 <li>🔎 YouTube Premium</li>
//                 <li>🔎 YouTube Studio</li>
//                 <li>🔎 YouTube Music</li>
//                 <li>🔎 YouTube Kid</li>
//             </ul>
//             <div className="my-4 border-b border-gray-300" />

//             <ul className="pt-5 space-y-2">
//                 <li>🏚️ Setting</li>
//                 <li>🎬 Report History</li>
//                 <li>🎥 Help</li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;

import React from "react";
import { useSelector } from "react-redux";
import {
    Home,
    Music,
    Video,
    Library,
    Clock,
    Heart,
    Download,
    History,
    PlaySquare,
    BookOpen,
    Trophy,
    Gamepad,
    Film,
    Tv,
    TrendingUp,
    ShoppingCart,
    Radio,
    Newspaper,
    Settings,
    Flag,
    HelpCircle,
    Youtube,
    Music2,
    ShieldCheck,
    Baby,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;

    return (
        <div className="p-4 shadow-lg w-60 bg-white text-sm">
            <ul className="space-y-2">
                <Link to="/"><SidebarItem icon={<Home size={20} />} label="Home" /></Link>
                <SidebarItem icon={<Music size={20} />} label="Music" />
                <SidebarItem icon={<Video size={20} />} label="Shorts" />
                <SidebarItem
                    icon={<Library size={20} />}
                    label="Subscription"
                />
            </ul>
            <Separator />

            <Section title="You">
                <SidebarItem icon={<History size={20} />} label="History" />
                <SidebarItem icon={<PlaySquare size={20} />} label="Playlist" />
                <SidebarItem icon={<Library size={20} />} label="Your videos" />
                <SidebarItem
                    icon={<BookOpen size={20} />}
                    label="Your courses"
                />
                <SidebarItem icon={<Clock size={20} />} label="Watch Later" />
                <SidebarItem icon={<Heart size={20} />} label="Liked video" />
                <SidebarItem icon={<Download size={20} />} label="Downloaded" />
            </Section>
            <Separator />

            <Section title="Subscriptions">
                <SidebarItem icon={<Music2 size={20} />} label="Music" />
                <SidebarItem icon={<Trophy size={20} />} label="Sports" />
                <SidebarItem icon={<Gamepad size={20} />} label="Gaming" />
                <SidebarItem icon={<Film size={20} />} label="Movies" />
            </Section>
            <Separator />

            <Section title="Explore">
                <SidebarItem icon={<TrendingUp size={20} />} label="Trending" />
                <SidebarItem
                    icon={<ShoppingCart size={20} />}
                    label="Shopping"
                />
                <SidebarItem icon={<Music2 size={20} />} label="Music" />
                <SidebarItem icon={<Film size={20} />} label="Film" />
                <SidebarItem icon={<Tv size={20} />} label="Live" />
                <SidebarItem icon={<Gamepad size={20} />} label="Gaming" />
                <SidebarItem icon={<Newspaper size={20} />} label="News" />
            </Section>
            <Separator />

            <Section title="More From YouTube">
                <SidebarItem
                    icon={<Youtube size={20} />}
                    label="YouTube Premium"
                />
                <SidebarItem
                    icon={<ShieldCheck size={20} />}
                    label="YouTube Studio"
                />
                <SidebarItem
                    icon={<Music2 size={20} />}
                    label="YouTube Music"
                />
                <SidebarItem icon={<Baby size={20} />} label="YouTube Kid" />
            </Section>
            <Separator />

            <ul className="pt-5 space-y-2">
                <SidebarItem icon={<Settings size={20} />} label="Setting" />
                <SidebarItem icon={<Flag size={20} />} label="Report History" />
                <SidebarItem icon={<HelpCircle size={20} />} label="Help" />
            </ul>
        </div>
    );
};

const SidebarItem = ({ icon, label }) => (
    <li className="flex items-center gap-3 px-2 py-1 hover:bg-gray-100 rounded-lg cursor-pointer">
        {icon}
        <span className="whitespace-nowrap">{label}</span>
    </li>
);

const Section = ({ title, children }) => (
    <>
        <h1 className="font-semibold pt-5 pb-3 text-gray-700">{title}</h1>
        <ul className="space-y-2">{children}</ul>
    </>
);

const Separator = () => <div className="my-4 border-b border-gray-200" />;

export default Sidebar;
