import { Link } from "react-router-dom";
import { useState } from "react";
import Confetti from "react-confetti";


const Quiz = ({progress, setProgress}) => {

    const[useConfetti, setUseConfetti] = useState(false);

    const handleClick = () => {
        if (!isNaN(progress)) {
            setProgress(progress  + 1);
        } else {
            setProgress(100); 
            
        }

        setUseConfetti(true)
        setTimeout(() => setUseConfetti(false), 8000);
    }

    return ( 
    <>



{useConfetti && <Confetti width="1300px" height="990px" />}

<div className="flex justify-around">
                    <div className=' p-5  sm:p-5'>
                        <Link to='/expression'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
                        </Link>
                    </div>
    
                    <div className=' p-5  sm:p-5'>
                        <Link to='/quiz'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700' onClick={handleClick}>Finish</button>
                        </Link>
                    </div>
                </div>
    </>
     );
}
 
export default Quiz;