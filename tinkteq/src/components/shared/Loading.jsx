import React from 'react'
import { Loader } from 'lucide-react'
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <Loader size={40} 
            className="text-[#295BF2] animate-spin"
        />
    </div>
  )
}

export default Loading