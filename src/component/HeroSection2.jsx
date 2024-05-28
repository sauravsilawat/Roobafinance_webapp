import React from 'react'
import graph from '../assets/general/graph.svg'
import title from '../assets/general/title.svg'

const HeroSection2 = () => {
    return (
        <div className='pb-[200px] text-white bg-[#101010]'>
            <div className='w-[80%] gap-[300px] m-auto flex pt-[50px]'>
                <img src={graph} width={900} alt="graph" />
                <div>
                    <img src={title} width={500} alt="title" />
                    <p>
                        Unleashing the untapped potential of the alternative  markets through Rooba.Finance - Your gateway to superior returns and exclusive opportunities
                        <br /> <br />
                        Discover the advantages of alternative market investments, unlock new horizons, and embark on a journey towards financial prosperity with our platform as your trusted partner.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection2