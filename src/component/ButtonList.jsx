import React from "react";
import Button from "./Button";

const buttonNames = [
    "Music",
    "Mixes",
    "Podcast",
    "History",
    "Satire",
    "Cockpits",
    "watched",
    "Talent shows",
    "Movie musicals",
    "Train",
    "Weight Training",
    "Information",
    "Presentations",
];

const ButtonList = () => {
    return (
        <div className="flex">
            {buttonNames.map((name, index) => (
                <Button key={index} name={name} />
            ))}
        </div>
    );
};

export default ButtonList;
