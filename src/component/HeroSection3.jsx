import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useAnimation } from 'framer-motion';
import herovideo2 from '../assets/video/herovideo2.mp4';

const HeroSection3 = () => {
    const videoRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const scrubValue = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

    useEffect(() => {
        scrubValue.onChange(latest => {
            const video = videoRef.current;
            if (video) {
                video.currentTime = latest * video.duration;
            }
        });
    }, [scrubValue]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play();
            video.pause(); // Ensure the video doesn't play automatically
        }
    }, []);


    const text = "Empower your financing strategies with tomorrow’s revolutionary technology. Our user-friendly platform will give your investors the power to unlock de-fi capabilities hence boosting the liquidity of your fund by large margins.";
    const words = text.split(' ');

    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY - 4050);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        words.forEach((_, index) => {
            const wordPosition = (index) * 20; // Adjust this value to control the speed
            if (scrollY > wordPosition) {
                controls.start((i) => (i === index ? { opacity: 1, color: "white" } : {}));
            } else {
                controls.start((i) => (i === index ? { opacity: 0.25, color: "white" } : {}));
            }
        });
    }, [scrollY, words, controls]);

    return (
        <div className='text-white bg-[#101010]'>
            <div className='w-[50%] m-auto flex flex-col justify-center items-center'>
                <video ref={videoRef} className='w-[500px]'>
                    <source src={herovideo2} type="video/mp4" />
                </video>
                <h1 className='text-4xl mt-4 leading-tight'>
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            initial={{ opacity: 0.2, color: "white" }}
                            animate={controls}
                            transition={{ duration: 0 }}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </h1>
                <p className='w-full mt-28 mb-6 text-[#6A6A6A]'>
                    How would you want to start <span className=' underline'>creating your financial instrument?</span>
                </p>
                <div className='w-full flex justify-start gap-10 pb-[300px]'>
                    <AnimatePresence>
                        <motion.button  whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }} className='w-[250px] py-2 text-3xl bg-[#4375FB] '>Talk to Us</motion.button>
                        <motion.button  whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }} className='w-[250px] py-2 text-3xl border border-white'>Book a Demo</motion.button>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default HeroSection3;
