import React from 'react';
import { LineWave } from "react-loader-spinner";

const Loader = () => {
  return (
    <main className='w-full fixed top-0 left-0 h-screen bg-white/80 backdrop-blur-md z-60'>
      <LineWave
        height="150px"
        width="150px"
        color="#D71FFF"
        ariaLabel="line-wave"
        wrapperClass='absolute top-[45%] left-[58%] xs:left-[55%] lg:top-[50%] lg:left-[50%]'
        wrapperStyle={{ transform: 'translate(-50%, -50%)' }}
        visible={true}
      />
    </main>
  )
}

export default Loader