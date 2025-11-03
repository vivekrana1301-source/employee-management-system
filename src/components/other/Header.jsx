import React from 'react';

const Header = ({data}) => {
 const  logOutUser =() =>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
  }
  return (
    
    <div className='flex justify-between items-end p-5'>
      <div className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>Vivek👋</span>  </div>
      <button onClick={logOutUser} className='bg-red-500 rounded-lg text-white font-medium text-xl px-2 py-1'>Log Out</button>
    </div>
  );
}

export default Header;
