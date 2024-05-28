import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import bgwi from '../assets/general/bgWhyInvest.svg'
import whyInvest from '../assets/general/whyinvest.svg'
import ic1 from '../assets/video/icon1.mp4'
import ic2 from '../assets/video/icon2.mp4'
import ic3 from '../assets/video/icon3.mp4'
import ic4 from '../assets/video/icon4.mp4'
import icon1 from '../assets/general/ic1.svg'
import icon2 from '../assets/general/ic2.svg'
import icon3 from '../assets/general/ic3.svg'
import icon4 from '../assets/general/ic4.svg'

const WhyInvest = () => {

  const [hoveredButton, setHoveredButton] = useState(null);

  // Event handlers
  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className='bg-white relative'>
      <img src={bgwi} className='absolute w-[1000px] left-1/2 transform -translate-x-1/2 z-0' alt="bg" />
      <div className='w-[50%] z-10 m-auto flex flex-col justify-center items-center'>
        <img src={whyInvest} className='mt-[200px] mb-[100px]' alt="title" />
        <p className='text-2xl font-semibold text-center mb-[140px]'>Putting your money in land may provide for better yield and returns making for a steady investment strategy.</p>

        <AnimatePresence>
          <div className='flex gap-8 pb-[200px]'>

            <div className='flex flex-col gap-8 w-[50%]'>
              <motion.div
                className='bg-[#F9F8F6] p-10 h-[500px] rounded-md'
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.04, backgroundColor: 'white', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                {hoveredButton === 1 ? (
                  <motion.img
                    src={icon1}
                    alt="icon1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <video width={60} src={ic1} autoPlay muted loop></video>
                )}
                <h2 className='my-[80px] text-2xl'>The demand for land investments <span className='font-bold'>has never been higher.</span></h2>
                <p>As a collateral impact of Covid-19, weekend homes or a place to escape the bustle of the city are expanding rapidly.</p>
              </motion.div>

              <motion.div
                className='bg-[#F9F8F6] p-10 h-[500px] rounded-md'
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.04, backgroundColor: 'white', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                {hoveredButton === 2 ? (
                  <motion.img
                    src={icon2}
                    alt="icon2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <video width={60} src={ic2} autoPlay muted loop></video>
                )}
                <h2 className='my-[65px] text-2xl'><span className='font-bold'>Unlock Tax Benefits</span> with Smart Agricultural Land Investments.</h2>
                <p>Gains from selling agricultural land in rural India is subject to tax exemption. Now is the time to seize the opportunity to invest in rural agricultural land and reap the benefits of tax advantages.</p>
              </motion.div>
            </div>

            <div className='flex flex-col gap-8 mt-20 w-[50%]'>
              <motion.div
                className='bg-[#F9F8F6] p-10 h-[500px] rounded-md'
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.04, backgroundColor: 'white', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                {hoveredButton === 3 ? (
                  <motion.img
                    src={icon3}
                    alt="icon3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <video width={60} src={ic3} autoPlay muted loop></video>
                )}
                <h2 className='my-[70px] text-2xl'><span className='font-bold'>Prime Land Investment</span> is Your Time-Tested Path to Enduring Prosperity</h2>
                <p>Seize the moment with a strategic investment choice — prime land. Historically valued for its enduring worth, land investment beckons as a cornerstone of prosperity.
                </p>
              </motion.div>

              <motion.div
                className='bg-[#F9F8F6] p-10 h-[500px] rounded-md'
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.04, backgroundColor: 'white', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                {hoveredButton === 4 ? (
                  <motion.img
                    src={icon4}
                    alt="icon4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <video width={60} src={ic4} autoPlay muted loop></video>
                )}
                <h2 className='my-[40px] text-2xl'>Own plots along the thriving <span className='font-bold'>Delhi-Bombay Expressway</span></h2>
                <p>The Delhi NCR & Sohna have established themselves as crucial real estate markets. The Delhi-Mumbai Expressway is expected to provide a solid push to real estate development in areas towards Rajasthan, boosting demand for land, residential & commercial properties.
                </p>
              </motion.div>
            </div>

          </div>
        </AnimatePresence>

      </div>
    </div>
  )
}

export default WhyInvest