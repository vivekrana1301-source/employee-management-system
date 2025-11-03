import React from 'react';

const NewTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5  bg-yellow-600 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className= ' text-sm bg-red-400 px-3 py-1 rounded '>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>
                    {data.description}
                </p>
                <div className='mt-4 flex items-center'>
                    <button  className=' bg-green-500 rounded py-1 px-2 text-sm w-full'>Accept task</button>
                </div>
            </div>
  );
}

export default NewTask;
