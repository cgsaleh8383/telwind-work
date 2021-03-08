import React from 'react';

const Nav = () => {
    return (
        <div className="bg-green-500 w-full h-20 shadow flex text-white items-center px-16">
            <div className="pr-5">
                <a href="#">Home</a>
            </div>
            <div className="pr-5">
                <a href="#">About</a>
            </div>
            <div className="pr-5">
                <a href="#">Contact</a>
            </div>
        </div>
    );
};

export default Nav;