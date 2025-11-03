import React from 'react';

const FailedTask = ({data}) => {
  return (
   <div className=' flex-shrink-0 h-full w-[300px] p-5  bg-cyan-600 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className= ' text-sm bg-red-200 px-3 py-1 rounded '>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>
                    {data.description}
                </p>
                <div className='mt-4'>
                    <button className='w-full   bg-green-500 rounded py-1 px-2 text-sm'>Failed</button>
                </div>
            </div>
  );
}

export default FailedTask;
