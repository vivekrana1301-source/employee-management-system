import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
   
    
    return (
        <div id='tasklist' className='py-5 px-2 overflow-x-auto flex h-[55%] w-full mt-10 gap-2 items-center justify-start flex-nowrap'>
            {data.tasks.map((elem ,idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx} data={elem}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
                }
                if(elem.CompleteTask){
                    return <CompleteTask key={idx} data={elem}/>
                }
                if(elem.FailedTask){
                    return <FailedTask key={idx} data={elem}/>
                }
                
            })}
       

        </div>
    );
}

export default TaskList;
