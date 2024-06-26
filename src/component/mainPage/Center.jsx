import React from 'react';
import './styles.css';

const Center = () => {
  return (
    
    <div className='bg-custom h-[500px] flex flex-col justify-center items-center text-blue-900 mb-4 z-30 '>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center '>Stay at Home. Consult Doctors Online</h1>
      <div className='flex gap-4'>
        <input className='w-64 h-10 rounded-lg px-2 ' placeholder='Search for any health Keyword' />
        <button className=' boder border-blue-900 bg-blue-900 hover:bg-white hover:text-black text-white rounded-lg px-3 h-10'>
          Search
        </button>
      </div>
      <div className='mt-6'>
        <p className="text-xl font-semibold mb-2">Trending Topics:</p>
        <ul className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black'>
          <li>Celiac Disease</li>
          <li>Bipolar Disorder</li>
          <li>Fungal Infection</li>
          <li>Mental Disease</li>
          <li>Heart Disease</li>
          <li>Diabetes</li>
        </ul>
      </div>
    </div>
 
  );
};

export default Center;
