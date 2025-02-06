import React from 'react'
const Greeting = () => {
  const userName = "Adewale";
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  


  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-2xl font-semibold capitalize'>
        {getGreeting()}, {userName}
      </h1>
      <p className='text-sm text-gray-400 dark:text-gray-300 ml-1'>Lets dive into some insights!</p>
    </div>
  )
}

export default Greeting