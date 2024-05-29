import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import title from '../assets/general/howtoInvest.svg';
import lp1 from '../assets/general/lp1.svg';
import lp2 from '../assets/general/lp2.svg';
import lp3 from '../assets/general/lp3.svg';
import btn1 from '../assets/general/button.svg';
import plus from '../assets/general/plus.svg';

const HowtoInvest = () => {
  const [openDetails, setOpenDetails] = useState('createAccount');

  const handleToggle = (key) => {
    setOpenDetails(key);
  };

  // Function to get the image based on openDetails state
  const getImage = () => {
    switch (openDetails) {
      case 'createAccount':
        return lp1;
      case 'discoverOpportunities':
        return lp2;
      case 'investWithFlexibility':
        return lp3;
      default:
        return lp1;
    }
  };

  return (
    <div className='bg-white h-screen'>
      <div className='w-[70%] m-auto flex gap-20'>
        <div className='w-[50%]'>
          <img src={title} className='mb-20' alt="howtoinvest" />
          <div className='flex gap-6'>
            <figure className={`w-[8px] h-[120px] ${openDetails === 'discoverOpportunities' ? "h-[230px]" : " "} ${openDetails === 'investWithFlexibility' ? "h-[320px]" : " "} bg-[#4375FB]`}></figure>

            <div className='flex flex-col gap-10'>
              <div>
                <div
                  className={` ${openDetails !== 'createAccount' ? "text-[#888888]" : ""} flex justify-between gap-[262px] border pb-4 border-b-[#888888] border-white text-xl font-bold items-center w-full cursor-pointer`}
                  onClick={() => handleToggle('createAccount')}
                >
                  Create Account <img src={plus} alt="plus" />
                </div>
                {openDetails === 'createAccount' && (
                  <div className="transition-all duration-300">
                    <p className='my-10'>
                      Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets
                    </p>
                    <img src={btn1} alt="btn1" />
                  </div>
                )}
              </div>

              <div>
                <div
                  className={` ${openDetails !== 'discoverOpportunities' ? "text-[#888888]" : ""} flex justify-between border pb-4 border-b-[#888888] border-white text-xl font-bold items-center w-full cursor-pointer`}
                  onClick={() => handleToggle('discoverOpportunities')}
                >
                  Discover Opportunities <img src={plus} alt="plus" />
                </div>
                {openDetails === 'discoverOpportunities' && (
                  <div className="transition-all duration-300">
                    <p className='my-10'>
                      Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div
                  className={` ${openDetails !== 'investWithFlexibility' ? "text-[#888888]" : ""} flex justify-between border pb-4 border-b-[#888888] border-white text-xl font-bold items-center w-full cursor-pointer`}
                  onClick={() => handleToggle('investWithFlexibility')}
                >
                  Invest with Flexibility <img src={plus} alt="plus" />
                </div>
                {openDetails === 'investWithFlexibility' && (
                  <div className="transition-all duration-300">
                    <p className='my-10'>
                      Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        <div className='mt-[180px] w-[50%]'>
          <AnimatePresence mode="wait">
            <motion.img
              key={openDetails}
              src={getImage()}
              alt="lp"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className='w-full'
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HowtoInvest;
