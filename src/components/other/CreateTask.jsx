import React, { useState } from 'react';

const CreateTask = () => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [assign , setAssign] = useState('');
    const [category , setCategory] = useState('');
    const [des , setDes] = useState('');

    const handleTask =(e)=>{
        setTask(e.target.value)
    }

    const handleDate =(e)=>{
        setDate(e.target.value)
    }

    const handleAssign =(e)=>{
        setAssign(e.target.value)
    }
    const handleCategory=(e)=>{

        setCategory(e.target.value)
    }

    const handledes=(e)=>{
        setDes(e.target.value)
    }








    const handleSub = (e) => {
        e.preventDefault()
        console.log(`Task is ${task}`);
        console.log(`date is ${date}`);
        console.log(`assignt  to ${assign}`);
        console.log(`category is ${category}`);
        console.log(`des is ${des}`);
        setTask('')
        setAssign('')
        setDate('')
        setCategory('')
        setDes('')
    }

    

    return (
        <div >
            <form
                onSubmit={(e) => {
                    handleSub(e)
                }}



                className='rounded flex p-5 bg-[#1C1C1C] justify-between mt-10 mx-5'  >
                <div className='w-1/2 p-5 mx-5'>
                    <h3 className='font-semibold ml-1 mb-1'>Task Title</h3>
                    <input required
                     value={task}
                        onChange={(e)=>{
                            handleTask(e)
                            
                        }}
                    className='border w-full bg-gray-700 p-2 rounded outline-none'
                    type="text" placeholder='Make a UI design' />

                    <h3 className='font-semibold ml-1 mt-3 mb-1'>Date </h3>
                    <input
                     required
                        value={date}
                        onChange={(e)=>{
                            handleDate(e)
                        }}
                        className='border w-full bg-gray-700 p-2 rounded outline-none '
                        placeholder='dd/mm/yyyy' type='date' />
                    <h3 className='font-semibold ml-1 mt-3 mb-1'>Assisn To</h3>
                    <input
                     required
                    value={assign}
                    onChange={(e)=>{
                        
                        handleAssign(e)
                    }}
                        className=' border w-full bg-gray-700 p-2 rounded outline-none'
                        placeholder='Enter name..'
                        type='text' />
                    <h3 className='font-semibold ml-1 mt-3 mb-1'>Category</h3>
                    <input 
                     required
                    onChange={(e)=>{
                        handleCategory(e)
                        
                    }}
                        className='border w-full bg-gray-700 p-2 rounded outline-none'
                        placeholder='Design , Dev ,etc' type='text' />
                </div>
                <div className=' w-1/2 p-3 mx-5 '>
                    <h3 className='font-semibold ml-1 mb-3'>Description</h3>
                    <textarea
                     required
                    onChange={(e)=>{
                        handledes(e)
                    }}
                        className='border w-full bg-gray-700 p-2 rounded outline-none h-[70%] '

                        placeholder="Enter your message here."
                    ></textarea>
                    <button className='bg-green-400 font-semibold w-full flex mt-2 p-2 rounded items-center justify-center'>Create Task</button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;
