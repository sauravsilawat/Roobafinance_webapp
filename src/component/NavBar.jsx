import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images
import nav1 from '../assets/nav/nav1.svg';
import nav2 from '../assets/nav/nav2.svg';
import nav3 from '../assets/nav/nav3.svg';
import navh1 from '../assets/nav/navh1.svg';
import navh2 from '../assets/nav/navh2.svg';
import navh3 from '../assets/nav/navh3.svg';

const NavBar = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    // Define button data
    const buttons = [
        { text: 'Opportunities', normalImg: nav1, hoverImg: navh1 },
        { text: 'How it Works', normalImg: nav2, hoverImg: navh2 },
        { text: 'About Us', normalImg: nav3, hoverImg: navh3 }
    ];

    // Event handlers
    const handleMouseEnter = (index) => {
        setHoveredButton(index);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    return (
        <nav className='m-auto w-[85%] border-[1px] border-b-[#494949] border-x-[#101010] border-t-[#101010] text-white flex justify-between pt-[50px] pb-[20px]'>
            <AnimatePresence>
                {buttons.map((button, index) => (
                    <motion.button
                        key={index}
                        className='flex gap-6 items-center'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={hoveredButton === index ? button.hoverImg : button.normalImg}
                            alt="nav-icon"
                        />
                        <h1 className={`${hoveredButton !== index ? 'text-gradient' : 'text-white'}`}>{button.text}</h1>
                    </motion.button>
                ))}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
