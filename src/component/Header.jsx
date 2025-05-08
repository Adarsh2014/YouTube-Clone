import React, { useEffect, useState } from "react";
import { toggleMneu } from "../utils/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { Mic, Bell, Plus } from "lucide-react";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggetions, setSuggetions] = useState([]);
    const [showSuggetions, setShowSuggetiona] = useState(false);
    const searchCache = useSelector((store) => store.search);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggetions(searchCache[searchQuery]);
            } else {
                getSearchSuggetion();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggetion = async () => {
        console.log(searchQuery);

        if (!searchQuery.trim()) return;

        try {
            const response = await fetch(
                `/youtube/complete/search?client=firefox&ds=yt&q=${searchQuery}`
            );
            const data = await response.json();
            setSuggetions(data[1]);
            dispatch(
                cacheResult({
                    [searchQuery]: data[1],
                })
            );
        } catch (err) {
            console.error("Failed to fetch suggestions:", err);
        }
    };

    const toggleMneuHandler = () => {
        dispatch(toggleMneu());
    };
    return (
        <div className="flex items-center justify-between p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMneuHandler()}
                    className="h-8 cursor-pointer"
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                />
                <a href="/">
                    <img
                        className="h-8 mx-2"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                    />
                </a>
            </div>

            <div className="col-span-10 px-11">
                <div className="relative">
                    <div className="flex items-center">
                        <input
                            className="w-[700px] border border-gray-400 p-2 px-5 rounded-l-full"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggetiona(true)}
                            onBlur={() => setShowSuggetiona(false)}
                        />
                        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                            🔍
                        </button>
                        <button className="p-2 ml-4 h-[42px] w-[42px] flex items-center justify-center rounded-full border hover:bg-gray-200">
                            <Mic className="h-5 w-5" />
                        </button>
                    </div>

                    {showSuggetions && (
                        <div className="absolute top-full mt-2 bg-white py-2 px-2 w-[700px] shadow-lg rounded-lg border border-gray-100 z-50">
                            <ul>
                                {suggetions.map((s) => (
                                    <li
                                        key={s}
                                        className="py-1 px-3 hover:bg-gray-200"
                                    >
                                        🔍 {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="col-span-1 flex items-center space-x-4">
                <button className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-gray-200 border border-gray-400">
                    <Plus className="h-5 w-5" />
                    <span className="text-sm hidden md:inline">Create</span>
                </button>

                <button className="p-2 hover:bg-gray-200">
                    <Bell className="h- w-5" />
                </button>

                <img
                    className="h-8 w-8 rounded-full"
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>
        </div>
    );
};

export default Header;

// import React, { useEffect, useState } from "react";
// import { toggleMneu } from "../utils/navSlice";
// import { useDispatch } from "react-redux";
// import { Mic, Bell, Plus } from "lucide-react";

// const Header = () => {
//     const dispatch = useDispatch();
//     const [searchQuery, setSearchQuery] = useState("");
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             getSearchSuggestions();
//         }, 200);

//         return () => clearTimeout(timer);
//     }, [searchQuery]);

//     const getSearchSuggestions = async () => {
//         if (!searchQuery.trim()) return;

//         try {
//             const response = await fetch(
//                 `/youtube/complete/search?client=firefox&ds=yt&q=${searchQuery}`
//             );
//             const data = await response.json();
//             setSuggestions(data[1]);
//         } catch (err) {
//             console.error("Failed to fetch suggestions:", err);
//         }
//     };

//     const toggleMneuHandler = () => {
//         dispatch(toggleMneu());
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
//             <div className="flex items-center justify-between px-5 py-3">
//                 {/* Logo & Menu */}
//                 <div className="flex items-center space-x-3">
//                     <img
//                         onClick={toggleMneuHandler}
//                         className="h-8 cursor-pointer"
//                         alt="menu"
//                         src="data:image/png;base64,..."
//                     />
//                     <a href="/">
//                         <img
//                             className="h-8"
//                             alt="youtube-logo"
//                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
//                         />
//                     </a>
//                 </div>

//                 {/* Search */}
//                 <div className="relative flex items-center">
//                     <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         onFocus={() => setShowSuggestions(true)}
//                         onBlur={() =>
//                             setTimeout(() => setShowSuggestions(false), 200)
//                         }
//                         className="w-[700px] border border-gray-400 p-2 px-5 rounded-l-full"
//                         placeholder="Search"
//                     />
//                     <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
//                         🔍
//                     </button>
//                     <button className="p-2 rounded-full border hover:bg-gray-200 ml-4">
//                         <Mic className="h-5 w-5" />
//                     </button>

//                     {showSuggestions && suggestions.length > 0 && (
//                         <div className="absolute top-full left-0 mt-2 w-[700px] bg-white shadow-lg border rounded-lg z-50">
//                             <ul>
//                                 {suggestions.map((s) => (
//                                     <li
//                                         key={s}
//                                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                     >
//                                         🔍 {s}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>

//                 {/* User Controls */}
//                 <div className="flex items-center space-x-4">
//                     <button className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-gray-200 border border-gray-400">
//                         <Plus className="h-5 w-5" />
//                         <span className="text-sm hidden md:inline">Create</span>
//                     </button>
//                     <button className="p-2 hover:bg-gray-200">
//                         <Bell className="h-5 w-5" />
//                     </button>
//                     <img
//                         className="h-8 w-8 rounded-full"
//                         alt="user"
//                         src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;
