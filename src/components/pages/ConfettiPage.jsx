import { useState } from "react";
import Confetti from "react-confetti";




const ConfettiPage = () => {
const[useConfetti, setUseConfetti] = useState(false);


const handleClick = () => {
    setUseConfetti(true)
    setTimeout(() => setUseConfetti(false), 8000);
}


    return ( 
        <>
        <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Celebrate!
      </button>
      {useConfetti && <Confetti width="1300px" />}
    </div>
        </>
     );
}
 
export default ConfettiPage;