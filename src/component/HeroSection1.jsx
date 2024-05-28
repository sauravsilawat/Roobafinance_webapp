import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import herovideo1 from '../assets/video/herovideo1.mp4'
import cta from '../assets/general/cta.svg'
import ctah from '../assets/general/cta_h.svg'

const HeroSection1 = () => {
    const videoRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    const [hoveredButton, setHoveredButton] = useState(false);

    const handleMouseEnter = () => {
        setHoveredButton(true);
    };

    const handleMouseLeave = () => {
        setHoveredButton(false);
    };

    const scrubValue = useTransform(scrollYProgress, [0, 0.5], [0.32, 1]);

    useEffect(() => {
        scrubValue.onChange(latest => {
            const video = videoRef.current;
            if (video) {
                video.currentTime = latest * video.duration;
                if (video.currentTime > 5.900409) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            }
        });
        if (scrollYProgress > 0) {
            setVisible(false);
        }
    }, [scrubValue]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play();
            video.pause(); // Ensure the video doesn't play automatically
        }
    }, []);

    const exitAnimation = {
        opacity: 0,
        filter: 'blur(10px)',
        transition: {
            duration: 1.5 // Adjust the duration as needed
        }
    };

    return (
        <div className='w-[85%] h-[530vh] m-auto text-white'>
            <video ref={videoRef} className='fixed left-0 top-0 z-[-1]'>
                <source src={herovideo1} type="video/mp4" />
            </video>
            <AnimatePresence>
                {visible && (
                    <motion.div
                        className='float-end sticky top-[280px]'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={exitAnimation}
                    >
                        <h1 className='text-3xl'>
                            Pave your way to Alpha Gains and <br /> make the most of your investments.
                        </h1>
                        <p className='text-[#6A6A6A] my-12 text-xl'>
                            Start your journey now.
                        </p>
                        <motion.button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={hoveredButton ? ctah : cta}
                                width={280}
                                alt="cta"
                            />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HeroSection1